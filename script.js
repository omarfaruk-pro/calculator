
const firstinput= document.getElementById("firstInput");
const lastinput= document.getElementById("secontInput");
const getresult= document.getElementById("getResult");

function add(){
    if (firstinput.value && lastinput.value){
        let add = parseInt(firstinput.value) + parseInt(lastinput.value);
        getresult.innerHTML = add;
        clearInput();
    }else{
        alert("এই বেটা, সব তথ্য দে!")
    }
}
function substrac(){
    if (firstinput.value && lastinput.value){
        let add = parseInt(firstinput.value) - parseInt(lastinput.value);
        getresult.innerHTML = add;
        clearInput();
    }else{
        alert("এই বেটা, সব তথ্য দে!")
    }
}
function multify(){
    if (firstinput.value && lastinput.value){
        let add = parseInt(firstinput.value) - parseInt(lastinput.value);
        getresult.innerHTML = add;
        clearInput();
    }else{
        alert("এই বেটা, সব তথ্য দে!")
    }
}
function division(){
    if (firstinput.value && lastinput.value){
        let add = parseInt(firstinput.value) - parseInt(lastinput.value);
        getresult.innerHTML = add;
        clearInput();
    }else{
        alert("এই বেটা, সব তথ্য দে!")
    }
}
function clearInput(){
    firstinput.value="";
    lastinput.value="";
}