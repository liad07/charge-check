if (navigator.userAgent.indexOf("Chrome")>-1){
    battery()
}
else if (navigator.userAgent.indexOf("Firefox")>-1){
    battery()
}
else if (navigator.userAgent.indexOf("Safari")>-1){
    x.textContent="Safari not support";
}
function battery() {

    navigator.getBattery().then(battery => {
        let m = ""
        let c = ""
        m = battery.level * 100 + "%"
        document.title="charge"+"-"+m
        if (battery.charging) {
            m += " ⚡";
            c = "green";
        }
        else{
            if (battery.level*100<80){
                c="orange";
            }
            if (battery.level*100<20){
                c="red";
            }
        }

        console.log(c, m);
        document.getElementById("batt").innerHTML = m;
        document.getElementById("batt").style.color = c;
    })
}