const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const loremPicsum = "https://picsum.photos/v2/list";

const getImage = async function () {
    const res = await fetch(loremPicsum + "?limit=100");
    const images = await res.json();
    console.log(images);
};

getImage();

