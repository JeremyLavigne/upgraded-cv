// Toggle for education / Work exp

const educationElt = document.getElementById("education");
const workExpElt = document.getElementById("work-exp");

educationElt.onclick = () => {
    if (educationElt.className === "miniature") {
        educationElt.className = "";
        workExpElt.className = "miniature";
    } 
};

workExpElt.onclick = () => {
    if (workExpElt.className === "miniature") {
        workExpElt.className = "";
        educationElt.className = "miniature";
    } 
};

// Toggle for skills / personality

const skillsElt = document.getElementById("skills-img");
const personalityElt = document.getElementById("personality-img");

skillsElt.oclick = () => {
    if (skillsElt.className === "skills tiny-skills") {
        skillsElt.className = "skills";
        personalityElt.className = "skills tiny-skills";
    } 
};

personalityElt.onclick = () => {
    if (personalityElt.className === "skills tiny-skills") {
        personalityElt.className = "skills";
        skillsElt.className = "skills tiny-skills";
    } 
};


// Larger video when played

const video1Elt = document.getElementById("video-left-left");
const video2Elt = document.getElementById("video-center-left");
const video3Elt = document.getElementById("video-center-right");
const video4Elt = document.getElementById("video-right-right");

video1Elt.onplay = () => {
    video1Elt.style.width = "300px";
    video1Elt.style.height = "225px";
    video1Elt.style.zIndex = 3;
};
video1Elt.onpause = () => {
    video1Elt.style.width = video2Elt.style.width;
    video1Elt.style.height = video2Elt.style.width;
    video1Elt.style.zIndex = 1;
};

video2Elt.onplay = () => {
    video2Elt.style.width = "300px";
    video2Elt.style.height = "225px";
    video2Elt.style.zIndex = 3;
};
video2Elt.onpause = () => {
    video2Elt.style.width = video1Elt.style.width;
    video2Elt.style.height = video1Elt.style.width;
    video2Elt.style.zIndex = 1;
};

video3Elt.onplay = () => {
    video3Elt.style.width = "300px";
    video3Elt.style.height = "225px";
    video3Elt.style.zIndex = 3;
};
video3Elt.onpause = () => {
    video3Elt.style.width = video1Elt.style.width;
    video3Elt.style.height = video1Elt.style.width;
    video3Elt.style.zIndex = 1;
};

video4Elt.onplay = () => {
    video4Elt.style.width = "300px";
    video4Elt.style.height = "225px";
    video4Elt.style.zIndex = 3;
};
video4Elt.onpause = () => {
    video4Elt.style.width = video1Elt.style.width;
    video4Elt.style.height = video1Elt.style.width;
    video4Elt.style.zIndex = 1;
};
