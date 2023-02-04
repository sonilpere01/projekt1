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
            const anchorTag = document.createElement('a');
            anchorTag.href = 'landingpage.html';
            anchorTag.click();
            console.log('Hapu Susam');
        } else {
            alert('username gabim');
            console.log('gabim');
        }
    }
)



