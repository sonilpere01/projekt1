
const users =[
        {

    username: 'test1',
    password: 'test1'
},
    {

    username: 'test2',
    password: 'test2'
},
    {

    username: 'admin',
    password: 'admin'
},
];
const formEl = document.querySelector('form');

formEl.addEventListener(
    "submit", (event)=> {
        event.preventDefault();
        const form = new FormData(formEl);
        const username = form.get('username');
        const name = form.get('name');
        const password = form.get('password');
        if (
            users.some(
                (user) => {
                    const {password: pass, username: usr} = user;
                    return (
                        username === usr &&
                        password === pass
                    );
                }
            )
        ) {
            localStorage.setItem(LOCALSTORAGE_USERNAME, username.toString());
            localStorage.setItem(LOCALSTORAGE_NAME, name.toString());
            const anchorTag = document.createElement('a');
            anchorTag.href = 'landingpage.html';
            anchorTag.click();
        } else {
            console.log('gabim');
            const addAlert = document.getElementById('alert');
            swal("Error", "Username ose Password Gabim", "error");
        }
    }
)


// function pasValue(){
//     var firstname = document.getElementById('username');
//     localStorage.setItem("textvalue",firstname);
//     console.log(firstname);
//     return false;
//
// }

