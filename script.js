function upDate(previewPic) {
    console.log(previewPic); // Vérifier que l'événement fonctionne
    document.getElementById("image").innerText = previewPic.alt;
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    document.getElementById("image").innerText = "Hover over an image below to display here";
    document.getElementById("image").style.backgroundImage = "url('')";
}
