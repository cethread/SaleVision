let boxStatus = false;
// let chatButton = document.querySelector('.chatbutton');
let box = document.querySelector('.chatbox');
let boxHeader = document.querySelector('.card-header');


function openChatBox () {
    if (boxStatus === false) {
        box.style.bottom = "0em";
        boxStatus = true;
    }
    else if (boxStatus === true) {
        box.style.bottom = "-15.6em";
        boxStatus = false;
    }
}
// Popover (learn more button (features))
$(function () {
    $('[data-toggle="popover"]').popover();
})
