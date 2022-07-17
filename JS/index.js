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
       
        document.getElementById('sum1').style.display='block';

       let January = answer5 * 45 * 31;
       document.getElementById('results8').innerHTML= `Your income for January is ${January}`

       let Feb = answer5 * 45 * 28;
       document.getElementById('results9').innerHTML= `Your income for February is ${Feb}`

       let March = answer5 * 45 * 31;
       document.getElementById('results10').innerHTML= `Your income for March is ${March}`

       let April = answer5 * 45 * 30;
       document.getElementById('results11').innerHTML= `Your income for April is ${April}`

       let May = answer5 * 45 * 31;
       document.getElementById('results12').innerHTML= `Your income for May is ${May}`

       let June = answer5 * 45 * 30;
       document.getElementById('results13').innerHTML= `Your income for June is ${June}`

       let July = answer5 * 45 * 31;
       document.getElementById('results14').innerHTML= `Your income for July is ${July}`

       let August = answer5 * 45 * 31;
       document.getElementById('results15').innerHTML= `Your income for August is ${August}`

       let September = answer5 * 45 * 30;
       document.getElementById('results16').innerHTML= `Your income for September is ${September}`

       let October = answer5 * 45 * 31;
       document.getElementById('results17').innerHTML= `Your income for October is ${October}`

       let November = answer5 * 45 * 30;
       document.getElementById('results18').innerHTML= `Your income for November is ${November}`

       let December = answer5 * 45 * 31;
       document.getElementById('results19').innerHTML= `Your income for December is ${December}`


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

