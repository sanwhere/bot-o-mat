class Robot {
    constructor(title, robotype, url) {
        this.title = title;
        this.robotype = robotype;
        this.url = url;
    }
}

const selectbox = document.getElementById("robotype");
const imagecontainer = document.querySelector(".images");
let selection = selectbox.dataset.selected;

selectbox.addEventListener("change", e => {
    selection = selectbox.value;
    imagecontainer.dataset.selected = "";
    imagecontainer.dataset.selected = selection;
});