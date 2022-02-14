const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("pword");

const form = document.getElementById("form");
const inputs = form.children;
const button = document.getElementById("submit");

console.log("The children of this form are as follows:", inputs);

for(let i = 0; i<= inputs.length - 5; i++){
    // console.log("This is the " + i + "th child", inputs[i]);
    button.addEventListener("click", (e) =>{
        e.preventDefault();

        // const value = inputs[i].value;
        // if(value == ""){
        //     alert("Please enter your" + inputs[i]);
        // }
    })
   
}


// fname.addEventListener("click", () => {
//     const value = fname.value;
//     if(value === ""){
//         alert("Please enter your first name!");
//         inputs.classList.add("error");
//     }
// })