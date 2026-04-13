
window.addEventListener(`scroll`, () => {
    const nav = document.querySelector(`nav`);

    if (window.scrollY > 50){
        nav.classList.add(`scrolled`);
    }

    else {
        nav.classList.remove(`scrolled`)
    }
})

const hiddenElements = document.querySelectorAll(`.hidden`)

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add(`show`);
        } else {
            entry.target.classList.remove(`show`);
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));

function toggleCard(card){
    let allCards = document.querySelectorAll(`.service-card, .why-card`);

    allCards.forEach(c => {
        if(c != card){
            c.classList.remove(`active`);
        }
    })

    card.classList.toggle(`active`);
}