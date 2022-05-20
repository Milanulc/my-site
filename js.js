function clock() {
    const hoursArrow = document.querySelector('.hours');
    const minutesArrow = document.querySelector('.minutes');
    const secondsArrow = document.querySelector('.seconds');
    const deg = 6;


    setInterval(() => {
        let currentday = new Date()
        const hours = currentday.getHours() * 30
        const minutes = currentday.getMinutes() * deg
        const seconds = currentday.getSeconds() * deg

        hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`
        minutesArrow.style.transform = `rotateZ( ${minutes}deg)`
        secondsArrow.style.transform = `rotateZ( ${seconds}deg)`

    }, 0)

}
console.log()
clock()


function newclock() {
    setInterval(() => {
        const time = document.querySelector('.display #time');

        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let newDate = date.toLocaleDateString();
        let fullTime = date.toLocaleTimeString();

        //time.textContent = hours + ":" + minutes + ":" + seconds + " " + newDate;
        time.textContent = fullTime + " " + newDate;
    })

}

newclock()



const button = document.getElementById('btn');
const dis = document.getElementById('time');

button.onclick = function (){
    dis.classList.toggle('hidden');
    
}
