 /* arquivo responsável por manter todos os dados salvos. */
export const ListarNomes = (props) => {
    const lista_dados = JSON.parse(localStorage.getItem(props.chave));

    if(lista_dados === null){
        return (<>Nenhum Dado no banco</>)
    }
    const array_nomes = lista_dados.map( ([id, nome, telefone]) => <tr key={id}>{nome}</tr>);

    return (
        <>
            Usuarios encontrado no banco
            <table>{array_nomes}</table>
        </>
        
    );
}

export const armazenarDb = (chave, nome, telefone) => {
    
    if( localStorage.getItem(chave) !== null)
    {   // Existe um localStorage - falta a função de checagem de entrada
        let nomes_salvos = JSON.parse(localStorage.getItem(chave)); // re-escrevendo o codigo
        let quantia_keys = nomes_salvos.length;
        nomes_salvos.push([ JSON.stringify(quantia_keys + 1) , nome, telefone]); // exemplo
        localStorage.setItem(chave ,JSON.stringify(nomes_salvos));
    }
    else
    {   // não existe um localStorage
        let listNames = [];
        let key_id= '1';
        listNames.push([key_id, nome, telefone])
        localStorage.setItem(chave , JSON.stringify(listNames));
    }
}