fetch ('http://localhost:5000/products')
.then(function (response) {
    return response.json();
    })
    .then(function (details) {
    console.log( details);
    let goods = document.getElementById('products');
    details.forEach (commodity => {
        let a = document.createElement('li')
        a.innerText = `${commodity.name}`
        goods.appendChild(a)
    })
    })
    .catch(function (error) {
    console.log('error', error);
    });

    fetch ('http://localhost:5000/products/fruits')
.then(function (response) {
    return response.json();
    })
    .then(function (details) {
    console.log( details);
    let goods = document.getElementById('fruitss');
    details.forEach (commodity => {
        let a = document.createElement('li')
        a.innerText = `${commodity.name}`
        goods.appendChild(a)
    })
    })
    .catch(function (error) {
    console.log('error', error);
    });

    fetch ('http://localhost:5000/products/vegetables')
.then(function (response) {
    return response.json();
    })
    .then(function (details) {
    console.log( details);
    let goods = document.getElementById('vegies');
    details.forEach (commodity => {
        let a = document.createElement('li')
        a.innerText = `${commodity.name}`
        goods.appendChild(a)
    })
    })
    .catch(function (error) {
    console.log('error', error);
    });