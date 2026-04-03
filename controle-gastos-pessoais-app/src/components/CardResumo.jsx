const CardResumo = ({name,saldo}) => {
    let obgStyle;
    let msgCompleta = "";
    let iconText;
    if (name === "Saldo"){
        if (saldo > 0) {
            obgStyle = {color: "rgb(37, 157, 37)"} ;
        } else {
            obgStyle = {color:"rgb(223, 48, 48)"}
        }
        msgCompleta = "Total"
        iconText = <i 
            className="fa-solid fa-hand-holding-dollar"
            style={saldo > 0 ? {                
                color: "rgba(37, 157, 37)",
                border: "2px solid rgba(37, 157, 37, 0.5)"}:
                {color: "rgb(223, 48, 48)",
                border: "2px solid rgba(223, 48, 48, 0.5)"}
            }
            
            ></i>;
    }else if(name === "Entradas"){
        obgStyle = {color: "rgb(37, 157, 37)"}
        iconText = <i 
            className="fa-solid fa-arrow-trend-up" 
            style={{
                color: "rgba(37, 157, 37)",
                border: "2px solid rgba(37, 157, 37, 0.5)",
            }}></i>
    }else if(name === "Saídas"){
        obgStyle = {color:"rgb(223, 48, 48)"}
        iconText = <i 
            className="fa-solid fa-arrow-trend-down" 
            style={{
                color: "rgb(223, 48, 48)",
                border: "2px solid rgba(223, 48, 48, 0.5)",
            }}></i>
    }

    const saldoEmReais = parseFloat(saldo).toLocaleString('pt-Br', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    return (
        <div className='card-resumo'>
            {iconText}
            <span>{name} {msgCompleta}</span>
            <h2 style={obgStyle}>R$ {saldoEmReais}</h2>
        </div>
    )
};

export default CardResumo;