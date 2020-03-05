//Code for PopUp Menu
let password = document.getElementById('pass');

document.getElementById('ton').addEventListener("click", (event) => {
    browser.runtime.sendMessage({
        status: "ON",
        pass: password.value 
    }).then((message) => {
        alert(message.response);
    });
});

document.getElementById('toff').addEventListener("click", (event) => {
    browser.runtime.sendMessage({
        status: "OFF",
        pass: password.value 
    }).then((message) => {
        alert(message.response);
    });;
});