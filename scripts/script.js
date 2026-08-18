const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");



menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});



const project = [
    {
        image: "../cdn/project1-1.png",
        title: "Restaurant System",
        description: "Java • MySQL • Swing"
    },

    {
        image: "../cdn/project1-2.png",
        title: "Restaurant System",
        description: "Desktop application"
    },

    {
        image: "../cdn/project1-3.png",
        title: "Restaurant System",
        description: "Database integration"
    }
];

let currentImage = 0;
let timer = null;

const projectImage = document.getElementById("project-img");

function changeImage() {

    currentImage++;

    if (currentImage >= project.length) {
        currentImage = 0;
    }

    const newImage = new Image();

    newImage.src = project[currentImage].image;

    newImage.onload = () => {

        projectImage.src = newImage.src;

    };

    timer = setTimeout(changeImage, 4000);
}

projectImage.addEventListener("mouseenter", () => {

    timer = setTimeout(changeImage, 4000);

});

projectImage.addEventListener("mouseleave", () => {

    clearTimeout(timer);
    timer = null;

});