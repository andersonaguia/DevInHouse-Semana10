import React from "react"
import PropTypes from 'prop-types'

const appContext = React.createContext(null)

const ContextProvider = appContext.Provider

export const useAppContext = () => {
    const context = React.useContext(appContext)
    return context
}

export const AppContextProvider = ({ children }) => {
    return(
        <ContextProvider value={"Conectado!"}>
            { children }
        </ContextProvider>
    )
}

AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}

