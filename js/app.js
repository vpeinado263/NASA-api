fetch()
.then(response => response.json()) //Convierte la respuesta a JSON
.then(data => {
    console.log(data);
})