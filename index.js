const init = async () => {
    const body = document.body;

    const div = document.createElement("div");
    div.setAttribute("id", "cat-image-wrapper");

    const catImage = document.createElement("img");
    catImage.src = chrome.runtime.getURL("images/black_cat.png");
    catImage.classList.add("cat-image");

    div.appendChild(catImage);
    body.appendChild(div);

    let timerId;

    catImage.addEventListener("click", () => {
        const randomNum = Math.floor(Math.random() * 2);
        const randomImage = randomNum === 0 ? "images/black_cat.gif" : "images/black_cat_stretches.gif";
        catImage.src = chrome.runtime.getURL(randomImage);

        clearTimeout(timerId);
        timerId = setTimeout(function () {
            catImage.src = chrome.runtime.getURL("images/black_cat.png");
        }, 5000);
    });
};

init();
