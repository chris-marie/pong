document.addEventListener('DOMContentLoaded', function () {
    var ballBox = document.querySelector('#ball_box');
    var ball = document.querySelector('#ball');

    var minx = ballBox.clientLeft;
    var maxx = ballBox.clientLeft + ballBox.clientWidth;

    var miny = ballBox.clientTop;
    var maxy = ballBox.clientHeight + ballBox.clientTop;

    var directionObject = {
        'right': 'left',
        'left': 'right',
        'up': 'down',
        'down': 'up'
    };

    var incrementObject = {
        'right': increment,
        'left': decrement,
        'up': increment,
        'down': decrement
    };

    ball.addEventListener('click', function () {
        var x = ball.clientLeft;
        var y = ball.clientTop;
        var xdir = 'right';
        var ydir = 'down';

        var intervalid = setInterval(function () {
            bounce(x,y);

        },100);

        function bounce (x,y) {
            x = ball.clientLeft;
            y = ball.clientTop;
            console.log('bouncing');
            if(inBounds(xdir,x)) {
                console.log(incrementObject[xdir],',',incrementObject[xdir].call(x));
                incrementObject[xdir].call(x);
            } else if (!inBounds (xdir,x)){
                xdir = switchDirections(xdir);
                incrementObject[xdir](x);
            }

            if(inBounds(ydir,y)) {
                incrementObject[ydir](y);
            } else if (!inBounds(ydir,y)) {
                ydir = switchDirections(ydir);
                incrementObject[ydir](y);
            }
            console.log('moving to: ', x,',',y);
            ball.style.left = x;
            ball.style.top = y;


        }

    });



    function switchDirections (dirKey) {
        return directionObject[dirKey];
    }
    function increment (pos) {
        console.log('incrementing');
        pos ++;
    }
    function decrement(pos) {
        console.log('decrement');
        pos--;
    }
    function inBounds (direction,pos) {
        switch (direction) {
            case 'right':
                return pos < maxx;
                break;
            case 'left':
                return pos > minx;
                break;
            case 'up':
                return pos < maxy;
                break;
            case 'down':
                return pos > miny;
                break;
            default:
                console.log('ERROR on inbounds dir,pos: ', direction,',',pos);
                break;
        }
    }

});