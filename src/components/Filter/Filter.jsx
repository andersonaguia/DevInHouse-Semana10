export const Filter = () => {
    return (
        <div className="filter-container">
            <input placeholder="Busque por uma dica..." type="text" className="inputField" />
            <button onClick={"handleOnEnterFilter"} className="searchButton">
              Buscar
            </button>
            <button onClick={"handleOnClearFilter"} className="searchButton">
              Limpar
            </button>
        </div>
    )
}