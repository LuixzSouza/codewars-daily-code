function loop_size(node){
  const caderno  = new Map()
  let passoAtual = 0
  
  while(node) {
    
    if (caderno.has(node)) {
      return passoAtual - caderno.get(node);
    } else {
      caderno.set(node, passoAtual);
      
      passoAtual++;
      
      node = node.getNext();
    }
  }
}