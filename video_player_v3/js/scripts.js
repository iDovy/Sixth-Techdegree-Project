const vid = document.querySelector("video");
const spans = document.querySelectorAll("span");
const text = document.querySelector(".text")

vid.addEventListener("timeupdate", () => {
    var time = vid.currentTime;
    for (let i = 0; i < spans.length; i++) {
        if (spans[i].getAttribute("data-start") <= time && spans[i].getAttribute("data-end") >= time )
        {
            spans[i].style.color = "#E8B63B";
        }
        else{
            spans[i].style.color = "#000";
        }
    }
});
text.addEventListener('click', (e) => {
    if(e.target.tagName == "SPAN"){
        vid.currentTime = e.target.getAttribute("data-start");
    }
});