
    var time = new Date().getHours();

    if(time >= 8 && time <= 13 ) {
        alert("Sabahin xeyr")
        document.body.style.backgroundColor = "yellow";
    }
    else if (time > 13 && time <= 18) {
        alert("Gothen morgen")
        document.body.style.backgroundColor = "green";
    }
    else {
        alert("axsamin xeyr")
        document.body.style.backgroundColor = "red";
    }