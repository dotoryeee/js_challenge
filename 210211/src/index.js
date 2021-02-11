// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const BODY_CLASSES = ['big', 'medium', 'small']
const body = document.querySelector("body")

function handleBody() {
    const sizeNow = window.innerWidth
    if (sizeNow < 600) {
        body.className = 'small';
    } else if (sizeNow <= 1000 && sizeNow >= 600) {
        body.className = 'medium'
    } else {
        body.className = 'large'
    }
}

window.addEventListener("resize", handleBody)