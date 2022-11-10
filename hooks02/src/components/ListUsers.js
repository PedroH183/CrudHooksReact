export const Usuarios = (props) => {
    let lista_users_origin = props.listaUsers;
    let id = 0;
    let lista_users = lista_users_origin.map( (nome) => <li key={id++} > {nome} </li>);
    if( id === 0){
        return;
    }

    return (
        <>
            <div> Listando os Usuarios </div> 
            <ul>{lista_users}</ul>
        </>
    );
}