// Gallery events

let imgEvent = document.querySelectorAll('.img_container img');
imgEvent.forEach(myFunction);

let chenchClass = true;
function myFunction(item) {
    item.addEventListener('click', () => {
        imgEvent.forEach(clearFunction);
        if (chenchClass) {
            item.classList.add("img_event_js");
            chenchClass = !chenchClass;
        } else chenchClass = !chenchClass;
    });
}
function clearFunction(el) {
    el.classList.remove("img_event_js");
}
