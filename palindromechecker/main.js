const txtInput = document.querySelector(".input input");
checkBtn = document.querySelector(".input button");

txtInput.addEventListener("keyup", ()=>{
    //removing spaces and all special characters from entered value//
    let filterInput=txtInput.value.replace(/[^A-Z0-9]/ig, "");
    console.log(filterInput)
}
)