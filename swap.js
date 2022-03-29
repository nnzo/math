function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomThree() {
    return getRandomArbitrary(0, 2).toFixed(0)
}

function shuffleArray(input) {
    for (var i = input.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = input[i];
        input[i] = input[j];
        input[j] = temp;
    }
}

function getFalseIndex(input) {
    let x = input.indexOf(false)
    if (x === -1) {
        console.log('FAIL')
        process.exit(1)
    } else {
        return x
    }
}

/*let array = [
    false, false, true
]*/

function doMath(input) {
    shuffleArray(input)

    // Pick user number
    let firstRan = getRandomThree()
    let first = input[firstRan]
    // console.log(`You picked item ${firstRan}`)
    /*if (array[firstRan] === true) {
        console.log('You won!')
        process.exit(0) // If won initially, exit
    }*/
    input.splice(firstRan, 1); // Remove user number from the three

    // Gameshow host removes one
    input.splice(getFalseIndex(input), 1)
    // console.log(`We removed a false from the array!!`)

    return {
        hand: first,
        array: input
    }
}

// Swaps
let swapSuccess = []
for (i = 0; i < 20000000; i++) {
    let array = [false, false, true]
    let z = doMath(array)
    // Swap hand
    let newHand = z.array.pop()
    swapSuccess.push(newHand)
}

// No waps
let oSuccess = []
for (i = 0; i < 20000000; i++) {
    let array = [false, true, false]
    let z = doMath(array)
    // DONT Swap hand
    oSuccess.push(z.hand)
}

console.log(`The chances of winning on a swap are ${(((swapSuccess.filter(x => x === true).length) / swapSuccess.length) * 100).toFixed(2)}`)
console.log(`The chanes of winning when not swapping are ${(((oSuccess.filter(x => x === true).length) / swapSuccess.length) * 100).toFixed(2)}`)
