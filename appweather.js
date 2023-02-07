const ft = new Fetch();
const ui = new UI();


const search = documet.getElementById('searchUser');
const button = documet.getElementById("submit");


button.addEventListener('click',()=>{
    const curretValue = search.value;

    ft.getCurrent(curretValue).then((data)=>{
        ui.popullateUI(data);
        ui.saveToLS(data);
    })

})