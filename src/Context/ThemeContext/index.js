import React from 'react'

const ThemeContext = React.createContext({
  isThemeDark: false,
  changeTheme: () => {},
})

export default ThemeContext
