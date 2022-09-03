import PropTypes from "prop-types"
export const CardList = ({ children }) => {
    return (
        <ul className="cardList">{ children }</ul>
    )
}

CardList.propTypes = {
    children: PropTypes.node
}