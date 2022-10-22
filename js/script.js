const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const loremPicsum = "https://picsum.photos/v2/list";

const getImage = async function () {
    // Get 100 images from Lorem Picsum
    const res = await fetch(loremPicsum + "?limit=100");
    const images = await res.json();
    console.log(images);

    selectRandomImage(images);
};

const selectRandomImage = function (images) {
    const index = Math.floor(Math.random() * images.length);
    const randomImg = images[index];
    console.log(randomImg);

    displayImage(randomImg);
};

const displayImage = function (randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;

    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

// Display a random image when button is clicked
button.addEventListener("click", function () {
    getImage();
});

