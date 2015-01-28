document.addEventListener('DOMContentLoaded', function () {
    var ballBox = document.querySelector('#ball_box');
    var ball = document.querySelector('#ball');

    var minx = ballBox.clientLeft;
    var maxx = ballBox.clientLeft + ballBox.clientWidth;

    var miny = ballBox.clientTop;
    var maxy = ballBox.clientHeight + ballBox.clientTop;

    // CURRENTLY ONLY A GIVES THE OPPOSITE DIRECTION - LATER WILL CALCULATE ANGLE
    var directionObject = {
        'right': 'left',
        'left': 'right',
        'up': 'down',
        'down': 'up'
    };

    ball.addEventListener('click', function () {
        var x = ball.clientLeft;
        var y = ball.clientTop;
        var xdir = 'right';
        var ydir = 'down';

        var intervalid = setInterval(function () {
            bounce();

        },500);

        function bounce () {
            x = ball.clientLeft;
            y = ball.clientTop;

            // CHECKS IF THE x WILL GO OUT OF BOUNDS AND INCREMENTS
            if(inBounds(xdir,x)) {
                x = getPosition(xdir,x);
                console.log('IN x: ', x);
            } else if (!inBounds (xdir,x)){
                xdir = switchDirections(xdir);
                x = getPosition(xdir,x);
                console.log('SWITCH x: ',x);
            }

            // CHECKS IF THE y WILL GO OUT OF BOUNDS AND INCREMENTS
            if(inBounds(ydir,y)) {
                y = getPosition(ydir,y);
                console.log('IN y: ', y);
            } else if (!inBounds(ydir,y)) {
                ydir = switchDirections(ydir);
                y = getPosition(ydir,y);
                console.log('SWITCH y: ',y);
            }
            console.log('moving to: ', x,',',y);

            //  ASSIGNS TO THE ball ELEMENT
            ball.style.left = x;
            ball.style.top = y;
        }

    });

    function getPosition (direction, pos) {
        if(direction == 'right' || direction == 'down') {
            var pos2 = increment(pos);
            console.log('inc OLD,NEW: ',pos,',',pos2);
            return pos2;
        } else if(direction == 'left' || direction == 'up') {
            var pos2 = decrement(pos);
            console.log('dec OLD,NEW: ',pos,',',pos2);
            return pos2;
        }
    }

    // REASON: CURRENTLY JUST USES THE CURRENT DIRECTION AS A KEY TO GET THE OPPOSITE DIRECTION
    // LATER THIS WILL GET THE ANGLE
    function switchDirections (dirKey) {
        return directionObject[dirKey];
    }


    // REASON: I WANTED TO KEEP THESE SEPARATE FUNCTIONS
    // BECAUSE I WILL ADD GRAVITY/VELOCITY FACTORS TO THE INCREMENT LATER
    function increment (pos) {
        return pos + 10;
    }
    function decrement(pos) {
        return pos - 10;
    }

    // REASON: CHECKS THE BOUNDS DEPENDING ON THE DIRECTION TRAVELING
    function inBounds (direction,pos) {
        switch (direction) {
            case 'right':
                console.log('inBounds right');
                return pos < maxx;
                break;
            case 'left':
                console.log('inBounds left');
                return pos > minx;
                break;
            case 'up':
                console.log('inBounds up');
                return pos > miny;
                break;
            case 'down':
                console.log('inBounds down');
                return pos < maxy;
                break;
            default:
                console.log('ERROR on inbounds dir,pos: ', direction,',',pos);
                break;
        }
    }

});