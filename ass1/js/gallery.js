function upDate(previewPic) {
    console.log("Event triggered successfully!");
    console.log("Alt text: " + previewPic.alt);
    console.log("Source URL: " + previewPic.src);

    let displayDiv = document.getElementById("image");

    displayDiv.innerHTML = previewPic.alt;
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    let displayDiv = document.getElementById("image");

    displayDiv.style.backgroundImage = "url('')";
    displayDiv.style.color = "#FFFFFF";
    displayDiv.innerHTML = "Hover over an image below to display here.";
}