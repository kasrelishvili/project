let section = document.querySelector('section');
let inputs = document.querySelectorAll('input');
let search = document.querySelector('.btn')

search.addEventListener('click', function() {

let apiUrl = `https://api.escuelajs.co/api/v1/products/?price_min=${inputs[0].value}&price_max=${inputs[1].value}`

console.log(apiUrl);

fetch(apiUrl)
.then(Response => Response.json())
.then(Response => renderer(Response))
})

function renderer(apiList) {
apiList.forEach(obj => {
    if(obj.title.toLowerCase().includes(inputs[2].value.toLowerCase())) {
        section.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="${obj.images}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${obj.title}</h5>
        <h5 class="card-title">${obj.price}</h5>
        <a href="#" class="btn btn-primary">Buy now</a>
        </div>
    </div>
    `
    };
})
}