import { AiFillGithub, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import './index.css';

export const Header = () =>{
    return(
      <nav className='navBar'>
        <div className='headerPrincipal'>
            <h1>Controle de Entradas e Saidas </h1>
        </div>
        <div className="linksNav">
            <div className="IconsLink">
              <AiOutlineGithub cursor={"pointer"} width={100}/>
            </div>
            <div className="IconsLink">
              <AiFillLinkedin/>
            </div>
        </div>
      </nav>
    );
}
