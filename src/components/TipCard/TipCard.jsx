import PropTypes from 'prop-types'

export const TipCard = ( { dica }) => {
    return (
        <>
            <li className="tipcard-container">
              <h2 className="title">{ dica.titulo }</h2>
              <div className="metadata">
                <div>
                  Linguagem: <span className="metaValue">{ dica.linguagem }</span>
                </div>
                <div>
                  Categoria: <span className="metaValue">{ dica.categoria }</span>
                </div>
              </div>
              <div className="content">
                { dica.descricao }
              </div>
              <div className="btn-group align-left">
                <button className="btn primary" type="submit">
                  editar
                </button>
                <button className="btn secondary" type="submit">
                  YouTube
                </button>
                <button className="btn secondary" type="submit">
                  apagar
                </button>
              </div>
            </li>
        </>
    )
}

TipCard.propTypes = {
    dica: PropTypes.shape({
        titulo: PropTypes.string,
        descricao: PropTypes.string.isRequired,
        categoria: PropTypes.string.isRequired,
        linguagem: PropTypes.string.isRequired,
        video: PropTypes.string,
    })
}