import { ListarNomes } from './services'

export const Table = () => {
    return(
        <table>
            <tr><td>id</td><td>Nome</td><td>Telefone</td></tr>
            <ListarNomes listnomes={'listNames'}/>
        </table>
    );
}