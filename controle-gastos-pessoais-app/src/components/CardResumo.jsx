const CardResumo = ({name,saldo}) => {
    let obgStyle 
    if (name === "Saldo total"){
        if (saldo > 0) {
            obgStyle = {color: "rgb(37, 157, 37)"} ;
        } else {
            obgStyle = {color:"rgb(223, 48, 48)"}
        }
    }else if(name === "Entradas"){
        obgStyle = {color: "rgb(37, 157, 37)"}
    }else if(name === "Saídas"){
        obgStyle = {color:"rgb(223, 48, 48)"}
    }

    const saldoEmReais = parseFloat(saldo).toLocaleString('pt-Br', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    return (
        <div className='card-resumo'>
                <span>{name}</span>
                <h2 style={obgStyle}>R$ {saldoEmReais}</h2>
        </div>
    )
};

export default CardResumo;