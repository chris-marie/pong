document.addEventListener('DOMContentLoaded',function () {
    var playBtn = document.querySelector('#play_btn');
    var playBtnModal = document.querySelector('.play_btn_modal');

    var gameOn = false;
    playBtn.addEventListener('click', newGame);

    function newGame() {
        var gameStartTime = new Date();
        console.log('Play has started game: ', gameStartTime);
        closeModal(playBtnModal);
        gameOn = true;
    }

    var track = document.querySelector('#paddle_track');
    var paddle = document.querySelector("#paddle");


    var leftCode = '37';
    var rightCode = '39';

    var minX = track.clientLeft;
    var maxX = track.clientLeft + track.offsetWidth;
    var paddleX = paddle.clientLeft;
    function incrementX() {}
    function moveLeft(x) {
        if(x <= minX) {
            return x;
        } else if (x > minX) {
            return x + 10;
        }
    }
    function  moveRight (x) {
        if(x >= maxX) {
            return x;
        } else if( x < maxX && (x + 10) ) {
            return x -10;
        }
    }
    document.addEventListener('keydown', function (event) {
        var keyCode = event.keyCode;

        //console.log('paddle.style.left', paddle.style.left);
        //console.log('paddleX: ',paddleX);
        if(keyCode == leftCode) {
            paddleX = moveLeft(paddleX);
            console.log('paddleX: ',paddleX);
            paddle.style.left = paddleX + 'px';
        } else if(keyCode == rightCode) {
            paddleX = moveRight(paddleX);
            paddle.style.left = paddleX + 'px';
        } else {

        }
    });

});

function closeModal (modal) {
    modal.style.display = 'none';
}

