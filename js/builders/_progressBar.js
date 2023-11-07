export function progressBarChange(inner, value, duration) {
    console.time('time');
    duration= duration*10
    let currentValue = 0;
    let start = setInterval(progressBarAction, duration);
    function progressBarAction() {
        inner.style.width = currentValue + '%';
        currentValue += value;
        if (currentValue > 100) {
            clearInterval(start);
            console.timeEnd('time');
        }
        
    }
}
