const API = 'http://localhost:4000'

function getValue(id){
    return document.getElementById(id).value
}

async function handleLogin(){
    try {
        const email = getValue('email')
        const password = getValue('pwd')
        console.log(email)
        console.log(password)
        const respone = await fetch(`${API}/login`, {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email, password})
        })

        const result = await respone.json()
        console.log(result)
        if(respone.status !==200){
            return alert('Email or password is incorrect')
        }
        localStorage.setItem('token',result.token)
        window.location.href = 'index.html'

    } catch (error) {
        console.error(error)
    }


} 