let note_name=document.getElementById("note-name");
let note_content=document.getElementById("note-content");
let add_btn=document.getElementById("add-btn");
let note_list=document.getElementById("list");

function empty_field()
{
    if (note_name.value==="" || note_content.value==="")
    {
        add_btn.disabled=true;
    }
    else
    {
        add_btn.disabled=false;
    }
}

function plusNote()
{
    var new_note=document.createElement("div");
    var new_note_head=document.createElement("p");
    var new_note_body=document.createElement("p");
    var del_btn=document.createElement("span");
    new_note.className="note";
    new_note_head.innerHTML=`${note_name.value}`;
    new_note_head.className="note-head";
    new_note_body.innerHTML=`${note_content.value}`;
    new_note_body.className="note-body";
    del_btn.className="material-symbols-outlined delete";
    //del_btn.id="delete";
    del_btn.innerHTML="delete";
    del_btn.onclick=function(){delete_note(del_btn)};
    new_note.appendChild(new_note_head);
    new_note.appendChild(new_note_body);
    new_note_head.appendChild(del_btn);
    note_list.appendChild(new_note);
    
}


function delete_note(e)
{
    e.parentElement.parentElement.remove();
}