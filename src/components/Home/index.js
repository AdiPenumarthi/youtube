import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch} from 'react-icons/ai'
import Header from '../Header'
import SideBar from '../SideBar'
import AdContainer from '../AdContainer'
import FailureView from '../FailureView'
import ThemeContext from '../../Context/ThemeContext'
import SearchVideos from '../SearchVideos'
import {
  HomeContainer,
  WatchContainer,
  VideosContainer,
  VideoListContainer,
  SearchContainer,
  SearchBar,
  SearchIconBtn,
  NoResultContainer,
  NoResultImage,
  NoResultHeader,
  NoResultDesc,
  RetryBtn,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
  inProgress: 'IN PROGRESS',
}

class Home extends Component {
  state = {
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    searchVideos: [],
  }

  componentDidMount() {
    this.onClickEnter()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSuccessSearchResults = () => {
    const {searchVideos} = this.state
    if (searchVideos.length === 0) {
      return this.noSearchResults()
    }
    return <SearchVideos searchVideos={searchVideos} />
  }

  noSearchResults = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isThemeDark} = value
        const failureImage = isThemeDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <NoResultContainer>
            <NoResultImage src={failureImage} alt="no videos" />
            <NoResultHeader color={isThemeDark ? '#000000' : '#ffffff'}>
              No Search results found
            </NoResultHeader>
            <NoResultDesc color={isThemeDark ? '#424242' : '##e2e8f0'}>
              Try different key words or remove search filter
            </NoResultDesc>
            <RetryBtn type="button" onClick={this.onClickEnter}>
              Retry
            </RetryBtn>
          </NoResultContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  onLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  onFailureView = () => <FailureView retry={this.onClickEnter} />

  onClickEnter = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))

      this.setState({
        searchVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  homeSearchVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'SUCCESS':
        return this.onSuccessSearchResults()
      case 'FAILURE':
        return this.onFailureView()
      default:
        return null
    }
  }

  getHomeTabVideos = () => {
    const {searchInput, apiStatus} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isThemeDark} = value
          return (
            <VideosContainer>
              <AdContainer />
              <VideoListContainer>
                <SearchContainer
                  borderColor={isThemeDark ? '#cccccc' : '#424242'}
                >
                  <SearchBar
                    type="search"
                    value={searchInput}
                    placeholder="Search"
                    onChange={this.onChangeSearchInput}
                    color={isThemeDark ? '#f1f1f1' : '#0f0f0f'}
                  />
                  <SearchIconBtn
                    type="button"
                    color={isThemeDark ? '#cccccc' : '#424242'}
                    onClick={this.onClickEnter}
                    data-testid="searchButton"
                  >
                    <AiOutlineSearch />
                  </SearchIconBtn>
                </SearchContainer>
                {apiStatus === 'IN PROGRESS'
                  ? this.onLoader()
                  : this.homeSearchVideos()}
              </VideoListContainer>
            </VideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isThemeDark} = value
          const bgColor = isThemeDark ? '#181818 ' : '#f9f9f9'
          return (
            <HomeContainer data-testid="home" bgColor={bgColor}>
              <Header />
              <WatchContainer>
                <SideBar />
                {this.getHomeTabVideos()}
              </WatchContainer>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
