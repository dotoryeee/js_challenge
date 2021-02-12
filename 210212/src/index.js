const counter = document.querySelector('h3')

// You're gonna need this
function getTime() {
    // Don't delete this.
    const xmas = new Date("december 24, 2021");
    const xmasSecond = xmas.getSeconds();
    const xmasMinute = xmas.getMinutes();
    const xmasHour = xmas.getHours();
    const xmasDay = xmas.getDay();
    const xmasMonth = xmas.getMonth();

    const now = new Date();
    const second = 60 - now.getSeconds() - xmasSecond;
    const minute = 60 - now.getMinutes() - xmasMinute;
    const hour = 60 - now.getHours() - xmasHour;
    const day = xmasDay - now.getDay() + (xmasMonth - now.getMonth()) * 30;
    counter.innerText = `${day}d : ${
        hour < 10 ? `0${hour}` : hour
    }h : ${
        minute < 10 ? `0${minute}` : minute
    }m : ${
        second < 10 ? `0${second}` : second
    }s`
}


function init() {
    getTime()
    setInterval(getTime, 1000)
}

init();
