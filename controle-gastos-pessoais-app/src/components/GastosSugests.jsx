import CardSugests from "./CardSugests";

const GastosSugests = () => {
    return(
        <div>
            <h2>Adicione um gasto</h2>
            <h3><i className="fa-solid fa-layer-group"></i> Adicionar por Categorias</h3>
            <div className="div-gastos">

                <CardSugests name={"Contas"}>
                    <i className="fa-solid fa-house"></i>
                </CardSugests>

                <CardSugests name={"Supermercado"}>
                    <i className="fa-solid fa-cart-shopping"></i>
                </CardSugests>

                <CardSugests name={"Lazer"}>
                    <i className="fa-solid fa-umbrella-beach"></i>
                </CardSugests>
                
                <CardSugests name={"Reserva de Emergência"}>
                    <i className="fa-solid fa-dollar-sign"></i>
                </CardSugests>
                
                <CardSugests name={"Cartão de Crédito"}>
                    <i className="fa-solid fa-credit-card"></i>
                </CardSugests>

                <CardSugests name={"Transporte"}>
                    <i className="fa-solid fa-car"></i>
                </CardSugests>

                <CardSugests name={"Criar com categoria personalizada"}>
                    <i className="fa-solid fa-arrow-pointer"></i>
                </CardSugests>
            </div>
            
        </div>
    )
}

export default GastosSugests;