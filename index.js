const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);
    const results = document.querySelector('#results')

    if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please give valid height ${weight}`
    } else if(height === '' || height  < 0 || isNaN(height)){
        results.innerHTML = `please give valid height ${height}`
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        results.innerHTML = `<span>${bmi}</span>`
    }
})