let convertBtnEl = document.getElementById("convertBtn");

convertBtnEl.addEventListener("click", function getSeconds() {
    let hoursInputEl = parseInt(document.getElementById("hoursInput").value);
    let minutInputEl = parseInt(document.getElementById("minutesInput").value);
    let seconds = ((hoursInputEl) * 60 + minutInputEl) * 60

    let errMsgEl = document.getElementById("errorMsg");
    let showSeconds = document.getElementById("timeInSeconds");

    if (isNaN(hoursInputEl) || isNaN(minutInputEl)) {
        errMsgEl.textContent = "please enter any value";
        errMsgEl.style.color = "#f7faf5";
    } else {
        showSeconds.textContent = seconds;
        showSeconds.style.color = "#ffffff";
    }
})