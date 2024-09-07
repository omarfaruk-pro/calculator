
const firstinput= document.getElementById("firstInput");
const lastinput= document.getElementById("secontInput");
const getresult= document.getElementById("getResult");

function add(){
    if (firstinput.value && lastinput.value){
        let add = parseInt(firstinput.value) + parseInt(lastinput.value);
        getresult.innerHTML = add;
        clearInput();
    }else{
        alert("Input your calculate number")
    }
}
function substrac(){
    if (firstinput.value && lastinput.value){
        let substract = parseInt(firstinput.value) - parseInt(lastinput.value);
        getresult.innerHTML = substract;
        clearInput();
    }else{
        alert("Input your calculate number")
    }
}
function multify(){
    if (firstinput.value && lastinput.value){
        let multification = parseInt(firstinput.value) * parseInt(lastinput.value);
        getresult.innerHTML = multification;
        clearInput();
    }else{
        alert("Input your calculate number!")
    }
}
function division(){
    if (firstinput.value && lastinput.value){
        let division = parseInt(firstinput.value) / parseInt(lastinput.value);
        getresult.innerHTML = division;
        clearInput();
    }else{
        alert("Input your calculate number")
    }
}
function clearInput(){
    firstinput.value="";
    lastinput.value="";
}
