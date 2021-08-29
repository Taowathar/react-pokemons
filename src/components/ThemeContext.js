import React, { createContext, useReducer } from 'react'

export const ThemeContext = createContext();

const initialState = {
    greymode: false,
};

const themeReducer = (state, action) => {
    switch (action.type) {
        case "colorful":
          return { greyMode: false };
        case "greyMode":
          return { greyMode: true };
        default:
          return state;
}};


export const ThemeProvider = props => {
    const [state, dispatch] = useReducer(themeReducer, initialState)
    return <ThemeContext.Provider value={{ state, dispatch }}>{props.children}</ThemeContext.Provider>
}