var btn = document.querySelector('.btn');
var input = document.querySelector('.input');
const emptyDiv = document.querySelector('.empty-div');

function response() {
    const response = document.createElement('h2');
    response.innerText = 'Hello ' + input.value;

    emptyDiv.appendChild(response);
}

btn.addEventListener('click', function () {
    const header = document.createElement('h1');
    header.innerText = input.value;
    emptyDiv.appendChild(header);
    console.log(input.value);

    setTimeout(response, 1500);
});
