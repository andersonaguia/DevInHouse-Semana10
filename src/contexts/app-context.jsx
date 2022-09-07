import React, {useState} from 'react';
import PropTypes from 'prop-types' 

const appContext = React.createContext(null)

const ContextProvider = appContext.Provider;

export const useAppContext = () => {
    const context = React.useContext(appContext)
    return context
}

export const AppContextProvider = ({ children }) => {
    const [ allTips, setAllTips ] = useState([])
    const [ filter, setFilter ] = useState(null)

    const createTip = (tip) => {
        setAllTips((prevTips) => [...prevTips, tip])
    }

    const filterTips = (query) => {
        query ? setFilter(query) : setFilter(null)
    }

    const tips = filter ? allTips.filter((tip) => tip.titulo.includes(filter)) : allTips

    const sortByCategory = () => {
        const categories = Array.from(new Set(allTips.map((tip) => tip.categoria)));
        return categories.map((catName) => {
        const count = allTips.filter((tip) => tip.categoria === catName).length;
        return { title: catName, count: count };
        });
    };

    const category = sortByCategory()

    return(
        <ContextProvider value={{createTip, filterTips, tips, category}}>
            { children }
        </ContextProvider>
    )
}

AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}

