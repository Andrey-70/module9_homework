const btn = document.querySelector('.btn');

const result = document.querySelector('.output');

btn.addEventListener('click', () => {
    const width = document.querySelector('.width').value;
    const height = document.querySelector('.height').value;

    if(width >= 100 && width <= 300 && height >= 100 && height <= 300) {
        fetch(`https://picsum.photos/${width}/${height}`)

        .then((response) => {
            result.innerHTML = `
            <div class="card">
                <img src="${response.url}">
            </div>`;
        })
        .catch(() => {console.log('error')});
    } else {
        result.innerHTML = "<p>Одно из чисел вне диапазона от 100 до 300</p>";
    }
})