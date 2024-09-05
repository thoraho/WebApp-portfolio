import './style.css';

const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Clicked');
});

function getData(){
    const response = fetch('http://localhost:3000')
    .then(response => response.json())
    .then(data => console.log(data))
}

getData();


