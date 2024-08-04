const changeIMG = document.querySelector("img");

changeIMG.onclick = () => {
    const mySrc = changeIMG.getAttribute("src");
    if (mySrc === "./images/trollface.png") {
        changeIMG.setAttribute("src", "./images/not_trollface.png");
    } else {
        changeIMG.setAttribute("src", "./images/trollface.png");
    }
};
