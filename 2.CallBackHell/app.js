// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
// }, 1000)

// setTimeout(() => {
//     document.body.style.backgroundColor = 'orange';
// }, 2000)

// setTimeout(() => {
//     document.body.style.backgroundColor = 'yellow';
// }, 3000)

//We could nest this

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'blue';
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
    }, delay)
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => { 
        delayedColorChange('yellow', 1000, () => { 
            delayedColorChange('green', 1000, () => { 
                delayedColorChange('blue', 1000, () => { 
                })
            })
        })
    })
});

searchMoviesAPI('amadeus', () => {
    saveToMYDB(movie, () => {
        //if it works, run this:
    }, () => {
        //if it doesn't work, run this: - This is an example of when we don't genuinely know if one function or part of the function will give the right solution
    })
}, () => {
    //if API is down, or request failed
})

// This is what we call a callback hell!

