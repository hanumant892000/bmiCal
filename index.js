let formData = document.querySelector('.form-page');
formData.addEventListener('submit', (e)=>{
    e.preventDefault();
    let height = document.querySelector('#height')
    let weight = document.querySelector('#weight')

    let heightInM = Number(height.value)/100;

    let BMIVal = Number(weight.value)/(heightInM**2)
    let finalResult = BMIVal.toFixed(2)
    let result = document.querySelector('.result');
    if(BMIVal<18){
        result.style.color = "red"
        result.innerHTML = `BMI Value: ${finalResult}, You are Underweight`
    }
    else if(BMIVal<=24){
        result.style.color = "green"
        result.innerHTML = `BMI Value: ${finalResult}, You are Normal Weight`
    }
    else if(BMIVal<=30){
        result.style.color = "orange"
        result.innerHTML = `BMI Value: ${finalResult}, You are Overweight`
    }
    else{
        result.style.color = "red"
        result.innerHTML = `BMI Value: ${finalResult}, You are Obese`
    }
})

