import React from 'react'

const ThemeContext = React.createContext({
  isThemeDark: false,
  changeTheme: () => {},
  savedVideosList: [],
  updateSavedVideosList: () => {},
  activeTab: 'HOME',
  changeTab: () => {},
})

export default ThemeContext
