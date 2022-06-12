burger.addEventListener(`click`, showBurger);

/* function showBurger(e) {
    let listBurger = document.querySelector(`.header__list-burger`);
    let menu = burger.nextElementSibling;
    let items = burger.children;

    if (menu.classList.contains(`header__list`)) {
        menu.classList.remove(`header__list`);
        menu.classList.add(`header__list-burger`);
        Array.from(items)[1].classList.add('x-mark');
        Array.from(items)[2].classList.add('x-mark2');
        Array.from(items)[0].hidden = true;
        Array.from(items)[3].hidden = true;
    } else {
        menu.classList.remove(`header__list-burger`);
        menu.classList.add(`header__list`);
        Array.from(items)[1].classList.remove('x-mark');
        Array.from(items)[2].classList.remove('x-mark2');
        Array.from(items)[0].hidden = false;
        Array.from(items)[3].hidden = false;
    }
} */

function showBurger(e) {
    let listBurger = document.querySelector(`.menu__list-burger`);
    let menu = burger.nextElementSibling;
    let items = burger.children;

    if (menu.classList.contains(`menu__list`)) {
        menu.classList.remove(`menu__list`);
        menu.classList.add(`menu__list-burger`);
        Array.from(items)[1].classList.add('x-mark');
        Array.from(items)[2].classList.add('x-mark2');
        Array.from(items)[0].hidden = true;
        Array.from(items)[3].hidden = true;
    } else {
        menu.classList.remove(`menu__list-burger`);
        menu.classList.add(`menu__list`);
        Array.from(items)[1].classList.remove('x-mark');
        Array.from(items)[2].classList.remove('x-mark2');
        Array.from(items)[0].hidden = false;
        Array.from(items)[3].hidden = false;
    }
}