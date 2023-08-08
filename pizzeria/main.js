// Index events

let mainImgEvent = document.querySelectorAll('.main_menu img');
mainImgEvent.forEach(myFunction);

let chenchClass = true;
function myFunction(item) {
    item.addEventListener('click', () => {
        mainImgEvent.forEach(clearFunction);
        if (chenchClass) {
            item.classList.add("img_food_js");
            chenchClass = !chenchClass;
        } else chenchClass = !chenchClass;
    });
}
function clearFunction(el) {
    el.classList.remove("img_food_js");
}
