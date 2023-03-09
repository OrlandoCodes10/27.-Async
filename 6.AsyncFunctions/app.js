const sing = async () => {
    return 'LA LA LA lA'
}

// sing()
//     .then(() => {
//         console.log("Promise resolved with:", data)
//     })
//     .catch(err => {
//         console.log("oh no, promise rejected!")
//         console.log(err)
//     })

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corigifeetarecute') return 'Welcome!'
    throw 'Invalid Password'
}

login('asdfakj')
.then(msg => {
    console.log("logged in!")
    console.log(msg)
})
.catch(err => {
    console.log("error!")
    console.log(err)
})