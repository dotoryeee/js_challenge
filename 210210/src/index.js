// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
//const title = document.getElementById("title");
const title = document.querySelector("#title")
console.dir(title)  //title 로 할 수 있는 모든 것을 표시


const superEventHandler = {
    mouseHover: function () {
        title.innerText = 'the mouse is here';
        title.style.color = colors[0];
    },
    mouseOut: function () {
        title.innerText = 'the mouse is gone';
        title.style.color = colors[1];
    },
    mouseLeftLClick: function () {
        title.innerText = 'you clicked';
        title.style.color = colors[2];
    },
    mouseRightClick: function () {
        title.innerText = 'you right clicked';
        title.style.color = colors[3];
    },
    windowResize: function () {
        title.innerText = 'you resized';
        title.style.color = colors[4];
    }
};
// https://developer.mozilla.org/ko/docs/Web/Events
title.addEventListener("mouseover", superEventHandler.mouseHover);
title.addEventListener("mouseout", superEventHandler.mouseOut);
title.addEventListener("click", superEventHandler.mouseLeftLClick);
window.addEventListener("contextmenu", superEventHandler.mouseRightClick);
window.addEventListener("resize", superEventHandler.windowResize);


function sayHello(name, age) {
    return `hello ${name} you are ${age} years old`
}

const greeting = sayHello('ljw', 5);

console.log(greeting);

const calc = {
    plus: function (a, b) {
        return a + b;
    }
}
const pluscalc = calc.plus(1, 2)
console.log(pluscalc);




