
import {
    AiOutlineArrowUp,
    AiOutlineArrowDown,
    AiFillBank,
} from 'react-icons/ai';
import './index.css';


interface resumeProps{
    entrada: number,
    saida: number,
    total: number,
}

interface resumeCardProps{
    Title : String,
    Icone : any,
    dataView : number,
}

const ResumeCard = ( {Title, dataView, Icone }: resumeCardProps) => {
    return(
        <>
            <div className="EntradasCs">
                <h2>{Title}</h2>
                <div className="iconeInputs">
                    {Icone}
                </div>
                <div className="textIcons">
                    <p>R$ {dataView}</p>
                </div>
            </div>  
        </>
    )
}

export const Resume = ({ entrada, saida, total }: resumeProps) => {

    return (
        <div className='ResumeSections'>
            <ResumeCard Icone={<AiOutlineArrowUp/>} Title={"Entradas"} dataView={entrada} />
            <ResumeCard Icone={<AiOutlineArrowDown/>} Title={"Saidas"} dataView={saida} />
            <ResumeCard Icone={<AiFillBank/>} Title={"Total"} dataView={total} />
        </div>
    );
}
