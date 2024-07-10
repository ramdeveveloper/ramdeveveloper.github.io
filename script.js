function showImage(img) {
    var expandedImg = document.getElementById("projects");
    expandedImg.src = img.src;
    var enlargedImageDiv = document.getElementById("project-img");
    enlargedImageDiv.style.display = "block";
}

function closeImage() {
    var enlargedImageDiv = document.getElementById("project-img");
    enlargedImageDiv.style.display = "none";
}