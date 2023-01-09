import { useMemo,useState } from "react";
import { sortConfigTyp } from "./types";


const useSortedData = ( meusDados: any, config = null) => {
    const [ sortConfig, setSortConfig ] = useState<sortConfigTyp | null>( config );

    const requestSort = ( chave: string ) => {
        let directionNew: 'ascending' | 'descending' = 'descending';
        
        if ( sortConfig && sortConfig.key === chave && sortConfig.direction === 'descending' ) {
            directionNew = 'ascending';
        }
        setSortConfig({ direction: directionNew, key: chave});
    }

    const sortingArrayByAField =  useMemo( () => {
        let sortedArrayData: any = [...meusDados]; // change other list 
        
        if(sortConfig !== null){
            sortedArrayData = sortedArrayData.sort( (first: any, second: any) => {
                // forma de verificar por chave a ordem correta de uma lista de objetos 
                let firstElement = first[sortConfig.key].toLowerCase();
                let secondElement = second[sortConfig.key].toLowerCase();
                
                if( firstElement < secondElement ){
                    return sortConfig.direction === 'descending' ? -1 : 1;
                }
                if( firstElement > secondElement ){
                    return sortConfig.direction === 'descending' ? 1 : -1;
                }
                return(0);
            } )
        }
        return sortedArrayData;
    }, [ sortConfig, meusDados ]);

    return { meus_dados: sortingArrayByAField, requestSort, sortConfig};
}

export default useSortedData;