function rgb(r, g, b) {

    // Func para Reaproveitar
    function colorToHex(color) {
        // Limitando 0 a 255
        let validColor = Math.max(0, Math.min(255, color));

        // Covertendo para Hexa e Gante 2 casa tranformando em Maiscula
        return validColor.toString(16).padStart(2, '0').toUpperCase();
    }

    return colorToHex(r) + colorToHex(g) + colorToHex(b);
}