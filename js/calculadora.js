function soma(a, b){
    return a+b
}

function sub(a, b){
    return a-b
}

function multi(a, b){
    return a*b
}

function divi(a, b){
    return a/b
}

function bhaskara(a, b, c){
    const delta = Math.pow(b,2) - 4*a*c
    let x1, x2
    if(delta == 0){
        x1 = "NaN"
        x2 = "NaN"
    }else{
        x1 = (-1*b + Math.sqrt(delta))/(2*a)
        x2 = (-1*b - Math.sqrt(delta))/(2*a)
    }

    return {x1, x2}
}

export { soma, sub, multi, divi, bhaskara }