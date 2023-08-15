let linkNowTime = document.getElementById("nowTime");
let linkLeftTime = document.getElementById("leftTime");

function editDateNow() {
    let dateNow = new Date();
    linkNowTime.innerHTML = dateNow.toLocaleString();
}
setInterval(editDateNow, 1000);

function timeLeft() {
    let dateNewYear = new Date("Dec 31, 2023 00:00:00").getTime();
    let tim = setInterval(() => {
        let dateNow = new Date().getTime();
        let startLeftTime = dateNewYear - dateNow;

        let day = Math.floor(startLeftTime / (1000 * 24 * 60 * 60)); //86 400 000 
        let hours = Math.floor((startLeftTime % (1000 * 24 * 60 * 60)) / (1000 * 60 * 60)); // 3 600 000
        let min = Math.floor((startLeftTime % (1000 * 60 * 60)) / (1000 * 60)); // 60 000
        let sec = Math.floor((startLeftTime % (1000 * 60)) / 1000);

        linkLeftTime.innerHTML = day + "d " + hours + ":" + min + ":" + sec;

        if (startLeftTime < 0) {
            clearInterval(tim);
            linkLeftTime.innerHTML = "Heppy New Year!!!";
        }
    }, 1000);
}
timeLeft();
