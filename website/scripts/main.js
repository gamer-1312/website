const changeIMG = document.querySelector("img");

changeIMG.onclick = () => {
    const mySrc = changeIMG.getAttribute("src");
    if (mySrc === "file:///home/laura/Desktop/website/images/trollface.png") {
        changeIMG.setAttribute("src", "file:///home/laura/Desktop/website/images/not_trollface.png");
    } else {
        changeIMG.setAttribute("src", "file:///home/laura/Desktop/website/images/trollface.png");
    }
};
