/**
 * @module Game
 * @description Basic bar and ball game
 * */

/**
 * @class Game
 * @description This creates a game object with the following properties
 * @property DOMElementContainer {HTMLElement} This is the container for all the game components
 * */

function Game(HTMLElementContainer, ballElement, barElement, barXIncrement) {
    this.DOMElementContainer = HTMLElementContainer;
    this.bar = new Bar(barElement, barXIncrement);
    this.ball = new Ball(ballElement);
    this.bar.bounds = {
        right: this.DOMElementContainer.clientWidth - this.bar.element.clientWidth
    };
}

/**
 * @class Bar
 * @description This constructor creates a bar object with the following properties
 * @property element {HTMLElement} This is the HTMLElement corresponding to the HTML page
 * @property bounds {Object} The bounds object has a left, right, top, and bottom property depending upon the requirements
 * @property currPos {Object} Contains the x and y properties for the given entity
 * @property increment {Object} Currently stores the amount by which position should be incremented
 * @method move Moves the object within the bounds object by taking a boolean as a parameter
 * */

function Bar(barElement, barXIncrement) {
    this.element = barElement;
    this.currPos = {
        x: 0
    };
    this.increment = barXIncrement || 10;
}

Bar.prototype.move = function(leftwards) {
    if (leftwards) {
        if (this.currPos.x - this.increment >= 0) {
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
    this.element.style.left = this.currPos.x + 'px';
};


function Ball(ballElement) {
    this.element = ballElement;
}