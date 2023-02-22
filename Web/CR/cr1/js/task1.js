let number = Math.floor(Math.random() * 10);
console.log(number);
let found=false;
confirm("Ce jeu consiste à deviner le nombre, compris entre 0 et 10, qui a été choisi aléatoirement!\nVoulez vous participer ?");
//let nb_tentatives;//= prompt("Choisir un nombre de tentatives compris entre 1 et 9\nPlus le nombre de tentatives est faible, plus le jeu est difficile!","");


do
{
    var nb_tentatives= prompt("Choisir un nombre de tentatives compris entre 1 et 9\nPlus le nombre de tentatives est faible, plus le jeu est difficile!\nLe nombre de tentatives doit être compris entre 1 et 9 \nEt le champ ne peut pas être vide !","");
}while(nb_tentatives<1 || nb_tentatives>9 || nb_tentatives==="");
let n0=parseInt(nb_tentatives);
var user_num= prompt("Deviner le nombre :","");

do
{   
    console.log(user_num);
    if(user_num==="")
    {
        console.log("!!!!!!!!!!!!!!!!!!");
        alert("Ce champ ne peut pas être vide !");
        user_num= prompt("Deviner le nombre :","");
        
        
    }
    if (parseInt(user_num) === number)
    {
        alert("Bingooo !");
        found=true;
        
        
    }
    else if (parseInt(user_num) > number)
    {
        if (nb_tentatives===1)
        {
            alert("You have lost :(")
        }
        else 
        {
            user_num=prompt(`${user_num} est plus grand que le nombre à deviner !`,"");
        }
        
        
    }
    else if (parseInt(user_num) < number)
    {
        if (nb_tentatives===1)
        {
            alert("You have lost :(")
        }
        else 
        {
            user_num=prompt(`${user_num} est plus petit que le nombre à deviner !`,"");
        }
        
    }
    
    nb_tentatives--;
    
} while(!found && nb_tentatives > 0);




let result=document.createElement("h1");
result.id="result";
let num_reveal=document.createElement("h1");
let rapport_tentatives=document.createElement("h1");
let pa_but=document.createElement("input");
let cnt=document.createElement("div");
pa_but.type="button";
pa_but.value="Play again ?"


if (found)
{
    result.innerHTML="VICTORY !";
    result.style.backgroundColor="blue"
}
else
{
    result.innerHTML="DEFEAT !";
    result.style.backgroundColor="red"
}

num_reveal.innerHTML=`Le nombre choisi par l'ordinateur est ${number}`;

rapport_tentatives.innerHTML=`Vous avez tenté ${n0-nb_tentatives}/${n0} fois`;


function handleClick() {
    window.location.reload();
}

function showingResults()
{
    document.body.appendChild(cnt);
    setTimeout(() => {
        cnt.appendChild(result);
    },500)
    
    setTimeout(() => {
        cnt.appendChild(num_reveal);
    },1000)

    setTimeout(() => {
        cnt.appendChild(rapport_tentatives);
    },1500)

    setTimeout(() => {
        cnt.appendChild(pa_but);
        pa_but.addEventListener("click", handleClick);
    },2000)




}

showingResults();