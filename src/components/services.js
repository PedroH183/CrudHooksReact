const avaliandoInput = (value, listObjetos, tamanhoArray) => {
    /* checar se é em branco */
    if( value === '' || value.length <= 3 )
    {
        return true;
    }
    /* checar se é repetido  */
    for(let i = 0; i < tamanhoArray; ++i )
    {
        if(listObjetos[i] === value){
            return true;
        }
    }

    return false;
}


export const armazenarNome = (chave, valor) => {
    
    if( (localStorage.getItem(chave) !== null) )
    {   // vou pegar o objeto que ja existe e incrementá-lo
        const newArrayObject = JSON.parse(localStorage.getItem(chave));
        const listObjetos = newArrayObject.map((nome) => nome);

        /* Checagem de entrada  */
        if( avaliandoInput(valor, listObjetos, listObjetos.length) ){
            return null;
        }
        
        listObjetos.push(valor);
        localStorage.setItem(chave, JSON.stringify(listObjetos));
    }
    else
    {   // vou criar um objeto e atribuir meu ultimo;
        const newArrayObject = [];
        newArrayObject.push(valor);
        localStorage.setItem(chave, JSON.stringify(newArrayObject));
    }
};

export const setItensDb = () => {
    /* Devemos pegar os dados anteriores e retornar em uma lista com o id de cada user3 */
}