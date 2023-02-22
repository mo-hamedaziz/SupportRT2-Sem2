let cnt=document.getElementById("cnt");

for(let i=0;i<5;i++)
{
    var new_node=document.createElement("li");
    new_node.innerHTML="Line "+(i+1);
    new_node.onclick=function(){changeColor(this);}
    cnt.appendChild(new_node);
}

function changeColor(e)
{
    let randColor = () =>  {
        return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
    }
    e.style.color=randColor();
}