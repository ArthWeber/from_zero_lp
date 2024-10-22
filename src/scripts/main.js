AOS.init();

const dataEvent = new Date("Nov 16, 2024 20:30:00");
const timeStampEvent = dataEvent.getTime();

const countdown = setInterval(function() {
    const now = new Date ();
    const timeStampAtual = now.getTime();

    const eventDataDistance = timeStampEvent - timeStampAtual;

    const msDay = 1000 * 60 * 60 * 24;
    const msHour = 1000 * 60 * 60;
    const msMin = 1000 * 60;

    const dataCount =  Math.floor(eventDataDistance / msDay);
    const hourCount = Math.floor((eventDataDistance % msDay) / msHour);
    const minCount = Math.floor((eventDataDistance % msHour) / msMin);
    const secondsCount = Math.floor((eventDataDistance % msMin) / 1000);

    document.getElementById('contador').innerHTML = `começa em ${dataCount}d ${hourCount}h ${minCount}m ${secondsCount}s`;

    if (eventDataDistance < 0) {
        clearInterval(countdown);
        document.getElementById('contador').innerHTML = `foi em 16/11/2024`;
    }
}, 1000)

