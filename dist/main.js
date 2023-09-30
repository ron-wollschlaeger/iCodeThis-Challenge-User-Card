//Template JavaScript
// Dark Mode Toggle
// Icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

// Theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Icon Toggling
const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};

// Initial Theme Check
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add("display-none"); 
};

// Manual Theme Switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
};

// call theme switch on clicking buttons
sunIcon.addEventListener("click", () => {
    themeSwitch();
})
moonIcon.addEventListener("click", () => {
    themeSwitch();
})

// invoke theme check on initial load
themeCheck();


//Project JavaScript
//btn-follow
function toggleFollow() {
    var button = document.getElementById("btn-follow");
    if (button.innerHTML === "Follow") {
        button.classList.remove("border-gray-800");
        button.classList.remove("bg-gray-800");
        button.classList.remove("hover:border-gray-500");
        button.classList.remove("hover:bg-gray-500");
        button.classList.add("border-gray-200");
        button.classList.add("text-gray-200");
        button.innerHTML = "Following";
    } else {
        button.classList.add("border-gray-800");
        button.classList.add("bg-gray-800");
        button.classList.add("hover:border-gray-500");
        button.classList.add("hover:bg-gray-500");
        button.classList.remove("border-gray-200");
        button.classList.remove("text-gray-200");
        button.innerHTML = "Follow";
    }
}

function toggleFollow2() {
    var button = document.getElementById("btn-modular_follow");
    if (button.innerHTML === "Follow") {
        button.innerHTML = "Following";
    } else {
        button.innerHTML = "Follow";
    }
}

// btn-download
function toggleDownload() {
    alert("No download here...  (ノ ゜Д゜)ノ ︵ ┻━┻");
}

//btn-share
function toggleShare() {
    alert("Nothing to share here... (╥﹏╥)")
}

//modular


//btn-modular_close
function toggleModularCole() {

}