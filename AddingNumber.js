let FirstNumberElement=document.getElementById("firstnumber");
let SecondNumberElement=document.getElementById("secondbumber");
let gameresultElement=document.getElementById("gameresult");
let userinputElement=document.getElementById("userinput");

function Restart(){
    let FirstrandomNumber=Math.random()*100;
    let SeconrandomNumber=Math.random()*100;
    FirstNumberElement.textContent=Math.ceil(FirstrandomNumber);
    SecondNumberElement.textContent=Math.ceil(SeconrandomNumber);
    gameresultElement.textContent="";
    userinputElement.value="";
}
Restart();
function Check(){
    let firstrandominteger=parseInt(FirstNumberElement.textContent)
    let Secondrandominteger=parseInt(SecondNumberElement.textContent);
    let check_number=parseInt(userinputElement.value);
    let sumofnumbers=firstrandominteger+Secondrandominteger;
    if (sumofnumbers===check_number){
        gameresultElement.textContent="Conguratulations";
        gameresultElement.style.backgroundColor="green";
    }
    if (sumofnumbers!==check_number){
        gameresultElement.textContent="wrong Answer";
        gameresultElement.style.backgroundColor="blue";
    }
}