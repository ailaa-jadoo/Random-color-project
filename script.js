const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

btn.addEventListener('click', () => {

    const newColor = randomColor()

    document.body.style.backgroundColor = newColor;
    console.log(newColor);

    h1.innerText = newColor;
})

const randomColor = () => {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;

    if (r < 150 && g < 150 && b < 150) {
        h1.style.color = "white";
    }

    return `rgb(${r}, ${g}, ${b})`;
}






// ************************** METHOD-2 ************************** //


// const btn = document.querySelector('button');
// const h1 = document.querySelector('h1');

// const randomColor = () => {
//     const r = Math.floor(Math.random() * 255) + 1;
//     const g = Math.floor(Math.random() * 255) + 1;
//     const b = Math.floor(Math.random() * 255) + 1;

//     const newColor = `rgb(${r}, ${g}, ${b})`;

//     document.body.style.backgroundColor = newColor;

//     h1.innerText = newColor;
// }

// btn.addEventListener('click', randomColor)