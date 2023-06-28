//NOTE JS:滾動到一定位置後背景變色----------
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 650) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// const app = Vue.createApp({
//         data() {
//             return {
//                 isToggleOpen: false,
//             }
//         },
//         mounted() {},
//         beforeUnmount() {},
//         methods: {}
//     });

//     app.mount('#app');