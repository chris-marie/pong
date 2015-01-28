document.addEventListener('DOMContentLoaded', function () {
    var ballBox = document.querySelector('#ball_box');
    var ball = document.querySelector('#ball');

    var minx = ballBox.clientLeft;
    var maxx = ballBox.clientLeft + ballBox.clientWidth - ball.clientWidth;
    console.log(minx,maxx);

    var miny = ballBox.clientTop;
    var maxy = ballBox.clientHeight - ballBox.clientTop - ball.clientHeight;
    console.log(miny,maxy);
    // CURRENTLY ONLY A GIVES THE OPPOSITE DIRECTION - LATER WILL CALCULATE ANGLE
    var directionObject = {
        'right': 'left',
        'left': 'right',
        'up': 'down',
        'down': 'up'
    };

    var x, x2, y, y2, pos, pos2;
    ball.addEventListener('click', function () {
        var xdir = 'right';
        var ydir = 'down';

        var intervalid = setInterval(function () {
            x = ball.clientLeft;
            y = ball.clientTop;
           xy = bounce(x,y);
            ball.style.left = xy[0] + 'vw';
            ball.style.top = xy[1] + 'vh';

            console.log('moving to: ', xy[0],',',xy[1]);
        },500);

        document.querySelector('button').addEventListener('click', function () {
            clearInterval(intervalid);
        });

        function bounce (x,y) {
            console.log('moving from: ', x,',',y);

            // CHECKS IF THE x WILL GO OUT OF BOUNDS AND INCREMENTS
            var x2 = getPosition(xdir,x);
            var y2 = getPosition(ydir,y);
            if(inBounds(xdir,y2)) {
                console.log('IN x: ', x2, xdir);

            } else if (!inBounds (xdir,x2)){
                console.log('BEFORE: ', x2,xdir);
                xdir = switchDirections(xdir);
                x2 = getPosition(xdir,x);
                console.log('SWITCH x: ',x2,xdir);
            }

            // CHECKS IF THE y WILL GO OUT OF BOUNDS AND INCREMENTS
            if(inBounds(ydir,y2)) {
                console.log('IN y: ', y2,ydir);
            } else if (!inBounds(ydir,y2)) {
                console.log('BEFORE: ', y2,ydir);
                ydir = switchDirections(ydir);
                y2 = getPosition(ydir,y);
                console.log('SWITCH y: ',y2,ydir);
            }

            //  ASSIGNS TO THE ball ELEMENT
            return [x2,y2];
        }

    });

    function getPosition (direction, pos) {
        if(direction == 'right' || direction == 'down') {
            pos2 = increment(pos);
            console.log('inc DIRENCTION,OLD,NEW: ',direction,pos,',',pos2);
            return pos2;
        } else if(direction == 'left' || direction == 'up') {
            pos2 = decrement(pos);
            console.log('dec DIRECTION,OLD,NEW: ',direction,pos,',',pos2);
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
        return pos + 2;
    }
    function decrement(pos) {
        return pos - 2;
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