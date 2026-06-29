// Hire Me Button
const hireBtn = document.querySelector(".search-btn button:first-child");

hireBtn.addEventListener("click", () => {
    alert("Thanks for visiting my portfolio!");
    window.location.href = "mailto:vyash917@gmail.com";
});

// View Project Button
const projectBtn = document.querySelector(".search-btn button:last-child");

projectBtn.addEventListener("click", () => {
    window.open("https://github.com/yash897542", "_blank");
});

// Social Media Links
const socialLinks = {
    facebook: "https://www.facebook.com/profile.php?id=100018860970020",
    linkedin: "https://www.linkedin.com/in/yashwant-verma-426508379/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/yashverma75/"
};

const icons = document.querySelectorAll(".icons i");

icons[0].onclick = () => window.open(socialLinks.facebook, "_blank");
icons[1].onclick = () => window.open(socialLinks.linkedin, "_blank");
icons[2].onclick = () => window.open(socialLinks.twitter, "_blank");
icons[3].onclick = () => window.open(socialLinks.instagram, "_blank");