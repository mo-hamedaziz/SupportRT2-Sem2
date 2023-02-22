let choosen_color=document.getElementById('color-selection');
let choosen_size=document.getElementById('size-selection');
let choosen_family=document.getElementById('family-selection');
let test_sample=document.getElementById('test');


function ch_size (e)
{
    let value=e.value;
    if (value<=100)
    {
        test_sample.style.fontSize=value+"px";
    }
    else
    {
        alert("Maximum text size is 100px");
        test_sample.style.fontSize="100px";
        e.value="100";
        
    }
    
}

function ch_color (e)
{
    let value=e.value;
    test_sample.style.color=value;
}


function ch_family (e)
{
    let value=e.value;
    test_sample.style.fontFamily=value;
}