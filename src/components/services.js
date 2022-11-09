
export const ListarNomes = (props) => {
    let ListNames = [];
    let chave = props.listnomes;

    if( localStorage.getItem(chave) !== null)
    {   // ler os nomes salvos dentro do storage
        const newArrayObject = JSON.parse(localStorage.getItem(chave));
        ListNames = newArrayObject.map( ([key,nome]) => <tr key={key}> {nome} </tr> );
    }
    else{
        return <>nothing...</>
    }

    return <tbody>{ListNames}</tbody>;
}

export const armazenarNomeDb = (chave, valor) => {
    
    if( (localStorage.getItem(chave) !== null) )
    {   // vou pegar o objeto que ja existe e incrementá-lo
        const storagedNames = JSON.parse(localStorage.getItem(chave));
        const key_prop = storagedNames.length; 
        storagedNames.push([ JSON.stringify(key_prop + 1 ), valor ]);
        localStorage.setItem( chave, JSON.stringify(storagedNames) );
    }
    else
    {   // vou criar um objeto e atribuir meu ultimo;
        const newArrayObject = [];
        let key_prop = '1';
        newArrayObject.push([key_prop, valor]);
        localStorage.setItem(chave, JSON.stringify(newArrayObject));
    }
};
