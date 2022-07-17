const inputA = document.getElementById('shedA');
const inputB = document.getElementById('shedB');
const inputC = document.getElementById('shedC');
const inputD = document.getElementById('shedD');
const myForm = document.getElementById('myForm')




let weeklyIncomeP= document.getElementById('results6'); 
let weeklyIncomeP1= document.getElementById('results7'); 

    
myForm.addEventListener('submit', (result)=>{
    result.preventDefault();

    let results1 = document.getElementById('results1');
    const answerA = parseInt(inputA.value);


let results2 = document.getElementById('results2');
const answerB = parseInt(inputB.value);

let results3 = document.getElementById('results3');
const answerC = parseInt(inputC.value);

let results4 = document.getElementById('results4');
const answerD = parseInt(inputD.value);

    
    results1.innerHTML=`Your production in Shed A ${answerA} litres per day`

    
    results2.innerHTML=`Your production in Shed B ${answerB} litres per day`

    
    results3.innerHTML=`Your production in Shed C ${answerC} litres per day`

        results4.innerHTML=`Your production in Shed D ${answerD} litres per day`


       let answer5 = answerA+answerB+answerC+answerD;
       document.getElementById('results5').innerHTML=`The total production is ${answer5} litres per day`;

       incomeOverTime(answer5, 7);
       incomeOverTimeYear(answer5, 365);
       

})

function incomeOverTime(totalProduction, time){
    const price = 45;
   let weeklyIncome = (totalProduction * price) * time;
weeklyIncomeP.innerHTML = `Your weekly income will be Ksh ${weeklyIncome}`

}

function incomeOverTimeYear(totalProduction, time){
    const price = 45;
   let yearlyIncome = (totalProduction * price) * time;
weeklyIncomeP1.innerHTML = `Your weekly income will be Ksh ${yearlyIncome}`

}