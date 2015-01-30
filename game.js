

function Game(HTMLElementContainer, ballElement, barElement, trackElement, playPauseElement, gameOverElement) {
    this.DOMElementContainer = new PongBoard(HTMLElementContainer);
    this.ball = new Ball(ballElement);
    this.track = new Track(trackElement);
    this.bar = new Bar(barElement);
    this.bar.bounds = {
        right: this.track.rightBound
    };
    this.ball.bounds = {
        //right: this.
    };
    this.playPauseBtn = new PlayPause(playPauseElement);
    this.gameOverModal = new Modal(gameOverElement);
}


function Ball(ballElement) {
    this.element = ballElement;
    this.currPosition = {
        x: 0
    };
}

function Bar (barElement) {
    this.element = barElement;
    this.currPos = {
        x:0
    };
    this.increment = 10;
}

Bar.prototype.move = function(leftwards,callback) {
    if(leftwards) {
        if(this.currPos.x - this.increment >= 0) {
            this.currPos.x = this.currPos.x - this.increment;
        } else {
            this.currPos.x = 0;
        }
    } else {
        if (this.currPos.x + this.increment <= this.bounds.right) {
            this.currPos.x = this.currPos.x + this.increment;
        } else {
            this.currPos.x = this.bounds.right;
        }
    }
    this.element.style.left = this.currPos.x + "px";
    callback();
};

function Track (trackElement) {
    this.element = trackElement;
    this.width = this.element.clientWidth;
    this.leftBound = this.element.clientLeft;
    this.rightBound = this.leftBound + this.width;
    this.height = this.element.clientHeight;
}



function PongBoard (containerElement) {
    this.element = containerElement;
    this.top = this.element.clientTop;
    this.bottom = this.element.clientHeight + this.top;
    this.left = this.element.
    this.right = thi
}

function PlayPause(playPauseElement) {
    this.element = playPauseElement;
    this.pauseModal = new Element(this.element);
}

function Modal (element) {
    this.element = element;
}

function Position () {
    this.xvelocity = 1;
    this.yvelocity = 1;
    this.theta = 1;
    // this.xPos = new
    // this.yPos = new
}