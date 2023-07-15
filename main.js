const button = document.getElementById('button');
const inputDate = document.querySelector('.inputDate')
const day = document.getElementById('dayAge');
const month = document.getElementById('monthAge');
const year = document.getElementById('yearAge');

button.addEventListener('click', calculatorAge)

function calculatorAge(){
    const notNull = document.querySelectorAll('input[name="age"]');
    notNull.forEach(element  => {
        if(!(element.value)){
            inputDate.classList.add("error");
            element.nextElementSibling.textContent = 'This field is required';
        }
    })
    const bornDate = new Date(parseInt(year.value),parseInt(month.value), parseInt(day.value));
    if(validDate(day,month,year)){
        inputDate.classList.remove("error");
        notNull.forEach(element  => {
                element.nextElementSibling.textContent = '';
        })
        var fechaActual = new Date();
        // Calcular la diferencia en milisegundos entre las dos fechas
        var diferenciaEnMilisegundos = fechaActual - bornDate;

        // Calcular los años, meses y días a partir de la diferencia en milisegundos
        var anios = Math.floor(diferenciaEnMilisegundos / (365.25 * 24 * 60 * 60 * 1000)); // Tomamos en cuenta los años bisiestos
        var meses = Math.floor((diferenciaEnMilisegundos % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000)); // Promedio de días en un mes
        var dias = Math.floor((diferenciaEnMilisegundos % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
        console.log({anios,meses,dias});
        const resultYear = document.getElementById('resultYear');
        const resultMonth = document.getElementById('resultMonth');
        const resultDay = document.getElementById('resultDay');
        resultYear.textContent = anios;
        resultMonth.textContent = meses;
        resultDay.textContent = dias;
    }
}

function validDate(day, month, year){
    const dayint = parseInt(day.value);
    const monthint = parseInt(month.value);
    const yearint = parseInt(year.value);
    if(yearint>2023){
        inputDate.classList.add("error");
        year.nextElementSibling.textContent = 'Must be in the past';
    }else if(monthint>12){
        inputDate.classList.add("error");
        month.nextElementSibling.textContent = 'Must be a valid month';
    }else if(dayint>31){
        inputDate.classList.add("error");
        day.nextElementSibling.textContent = 'Must be a valid day';
    }else if(isLeapYear(yearint)){
        if(dayint<=29 && monthint ==2){
            return true;
        }else if(dayint==31){
            if(monthint == 1 || monthint == 3 || monthint == 5 || monthint == 7 || monthint ==8 ||  monthint ==10 || monthint ==12){
                return true;
            }else{
                inputDate.classList.add("error");
                day.nextElementSibling.textContent = 'Must be a valid day';
                return false;
            }
        }else if(dayint==30){
            if(monthint == 4 || monthint == 6 || monthint == 9 || monthint ==11){
                return true;
            }else{
                inputDate.classList.add("error");
                day.nextElementSibling.textContent = 'Must be a valid day';
                return false;
            }
        }else{
            return true;
        }
    }else{
        if(dayint<=28 && monthint ==2){
            return true;
        }else if(dayint==31){
            if(monthint == 1 || monthint == 3 || monthint == 5 || monthint == 7 || monthint ==8 ||  monthint ==10 || monthint ==12){
                return true;
            }else{
                inputDate.classList.add("error");
                day.nextElementSibling.textContent = 'Must be a valid day';
                return false;
            }
        }else if(dayint==30){
            if(monthint == 4 || monthint == 6 || monthint == 9 || monthint ==11){
                return true;
            }else{
                inputDate.classList.add("error");
                day.nextElementSibling.textContent = 'Must be a valid day';
                return false;
            }
        }else if(dayint==29 && monthint==2){
            inputDate.classList.add("error");
            day.nextElementSibling.textContent = 'Must be a valid day';
            return false;
        }else{
            return true;
        }
    }
}
function isLeapYear(year){
    if(year%4===0){
        if(year%100===0){
            if(year%400===0){
                return true;
            }else{
                return false;
            }
        }
        return true;
    }else{
        return false;
    }
}