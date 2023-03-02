

const button_goBack_header_app = document.querySelector(".icon-long-arrow-left");

function goBack(){
    history.back();
}

button_goBack_header_app.addEventListener("click", function(){
    goBack();
});
