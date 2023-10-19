

const elem = document.getElementById("elem4")
elem.addEventListener("click", ()=> {
    if (!isFirstClickDone){
        change(elem)
        isFirstClickDone = true;
    }

});


// Отримуємо всі елементи, на які можна клікнути для наступного кліку
const clickableElements = document.querySelectorAll("h2, ul, ol, p, img, a, h3, h4");



clickableElements.forEach(e=>{
   e.addEventListener("click",()=>{
       if(isFirstClickDone) change(e)
   });
});

// Індикатор стану, чи був вже виконаний перший клік
let isFirstClickDone = false;



function change(clickElem) {
// Генеруємо випадковий колір
    const randomBackgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const randomTextColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    clickElem.style.backgroundColor = randomBackgroundColor;
    clickElem.style.color = randomTextColor;
}

    const imageElement = document.getElementById("image");
    const addButton = document.getElementById("addButton");
    const increaseButton = document.getElementById("increaseButton");
    const decreaseButton = document.getElementById("decreaseButton");
    const deleteButton = document.getElementById("deleteButton");
    let lastImage;
    const arrayOfImages =[imageElement] // Image


addButton.addEventListener("click", () => {
    const newImage = document.createElement("img");
    newImage.src = "images/Split.jpg"
    newImage.alt = "Фото мого улюбленого міста"

    if (arrayOfImages.length > 0) {
        imageElement.parentElement.appendChild(newImage);
        arrayOfImages.push(newImage)
        console.log(arrayOfImages)
    } else {
        imageElement.style.display = "block"
    }

});

increaseButton.addEventListener("click",()=>{
    if (arrayOfImages.length > 0) {
        const lastImage = arrayOfImages[arrayOfImages.length - 1]; // Отримуємо останнє зображення
        lastImage.width = lastImage.width * 1.2; // >20%
        lastImage.height = lastImage.height * 1.2;
    }
})

decreaseButton.addEventListener("click",()=>{
    if (arrayOfImages.length > 0) {
        const lastImage = arrayOfImages[arrayOfImages.length - 1]; // Отримуємо останнє зображення
        lastImage.width = lastImage.width * 0.8; // <20%
        lastImage.height = lastImage.height * 0.8;
    }
});

deleteButton.addEventListener("click", () => {

    if (arrayOfImages.length > 1) {
        lastImage = arrayOfImages.pop(); // Видаляємо останній елемент з масиву
        lastImage.parentElement.removeChild(lastImage);
    } else {
        imageElement.style.display = "none"
    }
});



