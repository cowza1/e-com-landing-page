const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
const text2 = intro.querySelector("h3");
const text3 = intro.querySelector(".preorder-link");

console.log(text3)

const section = document.querySelector("section");
const end = section.querySelector("h1");

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 7000,
    triggerElement: intro,
    triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

const textAnim = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0});

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller)

const textAnim2 = TweenMax.fromTo(text2, 3, {opacity: 0}, {opacity: 1});

let scene3 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim2)
.addTo(controller)


// scene2.on("end", () => {
//     scene3.addTo(controller)
// })

const textAnim3 = TweenMax.fromTo(text3, 3, {opacity: 0}, {opacity: 1});

let scene4 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim3)
.addTo(controller)

let accelAmount = 0.1;
let scrollPos = 0;
let delay = 0;

scene.on('update', e => {
    scrollPos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollPos - delay ) * accelAmount;
    console.log(scrollPos, delay)
    video.currentTime = delay;
}, 27.6);

const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        if(entry. isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))