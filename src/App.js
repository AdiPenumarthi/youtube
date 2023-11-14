import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import ThemeContext from './Context/ThemeContext'

import './App.css'

class App extends Component {
  state = {isThemeDark: false, savedVideosList: [], activeTab: 'HOME'}

  changeTheme = () => {
    this.setState(prevState => ({
      isThemeDark: !prevState.isThemeDark,
    }))
  }

  updateSavedVideosList = updatedList => {
    this.setState({savedVideosList: updatedList})
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  render() {
    const {isThemeDark, savedVideosList, activeTab} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isThemeDark,
          changeTheme: this.changeTheme,
          savedVideosList,
          updateSavedVideosList: this.updateSavedVideosList,
          activeTab,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
