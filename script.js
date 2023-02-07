// function addSubmit(){
//     const name=document.getElementById('username');
//     localStorage.setItem("NAME",name);
//     return
// }

window.addEventListener('load',()=>{
    const name = localStorage.getItem('landingpage:name');
    document.getElementById('result').innerHTML = name;
})