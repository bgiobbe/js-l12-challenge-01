const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const loremPicsum = "https://picsum.photos/v2/list";
let imagesArray;

/*
 * 100 images is enough for this demo program.
 * In a real application, I would maybe remove images from
 * the array when chosen for display and fetch a new page
 * when the array is empty.
 */

const getImages = async function () {
    // Get 100 images from Lorem Picsum
    const res = await fetch(loremPicsum + "?limit=100");
    imagesArray = await res.json();
    //console.log(imagesArray);
};

const selectRandomImage = function (images) {
    const index = Math.floor(Math.random() * images.length);
    const randomImg = images[index];
    console.log(randomImg);

    displayImage(randomImg);
};

const displayImage = function (image) {
    const author = image.author;
    const imageAddress = image.download_url;

    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

// Get image list when page is loaded
getImages();

// Display a random image when button is clicked
button.addEventListener("click", function () {
    selectRandomImage(imagesArray);
});

