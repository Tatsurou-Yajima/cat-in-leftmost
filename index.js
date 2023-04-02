const init = async () => {
    const body = document.getElementsByTagName("body")[0];

    const div = document.createElement("div");
    div.id = "cat-image";

    const catImage = document.createElement("img");
    catImage.src = chrome.runtime.getURL("images/black_cat.png");
    catImage.className = "cat-image";

    div.appendChild(catImage);
    body.appendChild(div);

    catImage.addEventListener("click", function () {
        catImage.src = chrome.runtime.getURL("images/black_cat.gif");

        setTimeout(function () {
            catImage.src = chrome.runtime.getURL("images/black_cat.png");
        }, 3000);
    });

};

init();
