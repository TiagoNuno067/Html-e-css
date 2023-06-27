function fato(n1) {
    let fat = 1
    for (let c = n1; c > 1; c-- ) {
        fat = fat * c
        
    }

    return fat
}

let res = fato(5)

console.log(res)