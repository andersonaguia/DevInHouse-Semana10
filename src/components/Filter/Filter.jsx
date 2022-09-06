export const Filter = () => {
    return (
        <div className="filter-container">
            <input placeholder="Busque por uma dica..." type="text" className="inputField" />
            <button onClick={()=>console.log("oi")} className="searchButton">
              Buscar
            </button>
            <button onClick={()=>console.log("oi")} className="searchButton">
              Limpar
            </button>
        </div>
    )
}