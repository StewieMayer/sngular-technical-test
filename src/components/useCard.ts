import { useEffect, useState } from "react";
import SerieUtil from "../utils/series";

const useCard = ()=>{

    const [numero, setNumero] = useState<number>();
    const [resultado, setResultado] = useState<number>();

    const setNumeroHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value) {
            const num = parseInt(value, 10);
            setNumero(num);
        } else {
            setNumero(undefined);
        }
    }

    const serieUtil = new SerieUtil();

    useEffect(()=>{
        setResultado(numero ? serieUtil.calcularSerie(numero): undefined)
    },[numero])

    return {
        setNumeroHandler,
        resultado
    };
}

export default useCard;