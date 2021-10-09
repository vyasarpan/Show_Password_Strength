var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("Strenght");

pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        msg.style.display = "Block";
    }
    else {
        msg.style.display = "None";
    }
    if (pass.value.length < 4) {
        str.innerHTML = "Weak";
        pass.style.borderColor = "red";
        msg.style.color = "red";
    }
    else if (pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "Medium";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }
    else if (pass.value.length >= 8) {
        str.innerHTML = "Strong";
        pass.style.borderColor = "green";
        msg.style.color = "green";
    }
})