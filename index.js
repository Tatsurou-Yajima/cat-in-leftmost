const init = async () => {
    const body = document.body;

    const div = document.createElement("div");
    div.setAttribute("id", "cat-image-wrapper");

    const catImage = document.createElement("img");
    catImage.src = chrome.runtime.getURL("images/black_cat.png");
    catImage.classList.add("cat-image");

    div.appendChild(catImage);
    body.appendChild(div);

    catImage.addEventListener("click", () => {
        catImage.src = chrome.runtime.getURL("images/black_cat.gif");

        setTimeout(function () {
            catImage.src = chrome.runtime.getURL("images/black_cat.png");
        }, 3000);
    });
};

init();
