const nameComplete = document.getElementById('name');
const note1 = document.getElementById('note1');
const note2 = document.getElementById('note2');
const note3 = document.getElementById('note3');
const calculate = document.getElementById('btn-calculate');
const btnPredict = document.getElementById('btn-predict');
const response = document.getElementById('result');

calculate.addEventListener('click', calculateNote);
btnPredict.addEventListener('click', predict);


//Funciones sumar notas
function calculateNote() {
    let user = nameComplete.value;
    let data1 = Number(note1.value);
    let data2 = Number(note2.value);
    let data3 = Number(note3.value);


    //Suma de valores
    let result = (data1 * 0.3) + (data2 * 0.3) + (data3 * 0.4);

    //PERDIÓ MATERIA
    if (result < 3.5) {
    response.style.color = 'black'
    response.textContent = `Joven ${user}, perdió la materia con nota de: ${result.toFixed(2)}.`;}
 
    //GANÓ MATERIA
    if (result > 3.5) { 
    response.style.color = 'orange'
    response.textContent = `Joven ${user}, aprobó la materia con nota de: ${result.toFixed(2)}.`;}
    
    //NOTA SOBRESALIENTE
    if (result > 4.5) { 
    response.style.color = 'green'
    response.textContent = `Joven ${user}, aprobó la materia con nota sobresaliente de: ${result.toFixed(2)}.`;}
    
}

//Función predecir nota
function predict (event){
    event.preventDefault(event); 

    let data1 = Number(note1.value);
    let data2 = Number(note2.value);

    let requireddata3 = (3.5 - (data1 * 0.3 + data2 * 0.3)) / 0.4;

    note3.value = Math.max(5, requireddata3).toFixed(2); 

}
