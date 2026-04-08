function productFib(prod){

    // Ponto de partida
    let a = 0;
    let b = 1;


    while(a * b < prod) {
        [a, b] = [b, a + b];
    }

    if(a * b === prod ) {
        return [a, b, true]
    } else {
        return [a, b, false]
    }
}