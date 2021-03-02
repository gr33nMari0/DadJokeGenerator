// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("RESPONSE, waiting to parse...", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("Data parsed");
//         console.log(data.ticker.price)
//     })
//     .catch(e => { 
//         console.log("Oh no, error", e)
//     })


// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
//         console.log(res)
//         const data = await res.json()
//         console.log(data.ticker.price)
//     } catch (e) {
//         console.log("Something went wrong...", e)
//     }
// }

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(e => {
//         console.log("Oh no, error", e)
//     })


// const fetchBTCPrice = async () => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//         console.log(res.data.ticker.price)
//     } catch (e) {
//         console.log("Error", e)
//     }

// }

const jokes = document.querySelector('#jokes');
const button = document.querySelector("button");


const addNewJoke = async () => {
    const jokeText = await dadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

button.addEventListener('click', () => {
    let numberInput = document.querySelector("input");
    let number = parseInt(numberInput.value) | 1;
    for (i = 0; i < number; i++) {
        addNewJoke();
    }
    numberInput.value = "";
})

const dadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        return "No jokes available, sorry."
    }
}