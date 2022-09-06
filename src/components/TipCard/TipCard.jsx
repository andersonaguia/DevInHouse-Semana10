import PropTypes from 'prop-types'

export const TipCard = ( {tip} ) => {
  const { id, titulo, linguagem, categoria, descricao, video } = tip;
    return (
        <>
            <li className="tipcard-container">
              <h2 className="title">{ titulo }</h2>
              <div className="metadata">
                <div>
                  Linguagem: <span className="metaValue">{ linguagem }</span>
                </div>
                <div>
                  Categoria: <span className="metaValue">{ categoria }</span>
                </div>
              </div>
              <div className="content">
                { descricao }
              </div>
              <div className="btn-group align-left">
                <button onClick={()=> console.log("oi")} className="btn primary" type="submit">
                  editar
                </button>
                <a href={video} className="btn secondary" type="submit">
                  YouTube
                </a>
                <button onClick={()=> console.log("oi")} className="btn secondary" type="submit">
                  apagar
                </button>
              </div>
            </li>
        </>
    )
}

TipCard.propTypes = {
    tip: PropTypes.shape({
        id: PropTypes.number.isRequired,
        titulo: PropTypes.string.isRequired,
        descricao: PropTypes.string.isRequired,
        categoria: PropTypes.string.isRequired,
        linguagem: PropTypes.string.isRequired,
        video: PropTypes.string,
    })
}