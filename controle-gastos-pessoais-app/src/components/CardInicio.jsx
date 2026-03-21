const CardInicio = ({name,saldo}) => {
    let obgStyle 
    if (name === "Saldo total"){
        obgStyle = {color: "black52"}
    }else if(name === "Entradas"){
        obgStyle = {color: "green"}
    }else if(name === "Saídas"){
        obgStyle = {color:"rgb(223, 48, 48)"}
    }

    const saldoEmReais = parseFloat(saldo).toLocaleString('pt-Br', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    return (
        <div className='card-inicio'>
                <span>{name}</span>
                <h2 style={obgStyle}>R$ {saldoEmReais}</h2>
        </div>
    )
};

export default CardInicio;