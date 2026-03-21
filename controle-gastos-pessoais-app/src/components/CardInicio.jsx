const CardInicio = ({name,saldo}) => {
    let obgStyle 
    if (name === "Seu saldo"){
        obgStyle = {color: "black52"}
    }else if(name === "Entradas"){
        obgStyle = {color: "green"}
    }else if(name === "Saídas"){
        obgStyle = {color:"rgb(223, 48, 48)"}
    }
    return (
        <div className='card-inicio'>
            <div>
                <p>{name}</p>
                <h2 style={obgStyle}>{saldo}</h2>
            </div>
        </div>
    )
};

export default CardInicio;