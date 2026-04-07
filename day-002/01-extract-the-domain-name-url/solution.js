function domainName(url){
    
    // Armazenando a url
    let solutionClear = url;

    // Limpando/Filtrando a Url
    let clearUrl = solutionClear.replace("http://", "").replace("https://", "").replace("www.", "");

    // Cortando a partir do "."
    let cuttingUrl = clearUrl.split(".")

    return cuttingUrl[0]
}
