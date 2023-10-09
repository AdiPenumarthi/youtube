import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'

import ThemeContext from './Context/ThemeContext'

import './App.css'

class App extends Component {
  state = {isThemeDark: false}

  changeTheme = () => {
    this.setState(prevState => ({
      isThemeDark: !prevState.isThemeDark,
    }))
  }

  render() {
    const {isThemeDark} = this.state
    return (
      <ThemeContext.Provider
        value={{isThemeDark, changeTheme: this.changeTheme}}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/videos/:id" component={VideoItemDetails} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
