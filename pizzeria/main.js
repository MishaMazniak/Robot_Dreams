// Index events

let mainImgEvent = document.querySelectorAll('.main_menu img');
mainImgEvent.forEach(myFunction);

let chenchClass = true;
function myFunction(item) {
    item.addEventListener('click', () => {
        mainImgEvent.forEach((el) => {
            el.classList.remove("img_food_js");
        });
        if (chenchClass) {
            item.classList.add("img_food_js");
            chenchClass = !chenchClass;
        } else chenchClass = !chenchClass;
    });
}
// if (item.classList.contains('img_food_js')) {
//     item.classList.remove('img_food_js');
// } else {
//     item.classList.add('img_food_js');
// }