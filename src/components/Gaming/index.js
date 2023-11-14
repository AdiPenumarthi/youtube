import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import ThemeContext from '../../Context/ThemeContext'
import {
  TrendingHeadingContainer,
  Logo,
  PageHeading,
  GamingVideosContainer,
  EachVideo,
  GameImage,
  GameTitle,
  GameViewCount,
} from './styledComponents'
import {
  WatchContainer,
  VideosContainer,
  HomeContainer,
  NoResultContainer,
  NoResultDesc,
  NoResultHeader,
  NoResultImage,
  RetryBtn,
} from '../Home/styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
  inProgress: 'IN PROGRESS',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, gamingVideos: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  onLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  loadFailureView = () => <FailureView retry={this.getGamingVideos()} />

  successGamingVideos = () => {
    const {gamingVideos} = this.state
    if (gamingVideos.length === 0) {
      return this.noSearchResults()
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isThemeDark} = value
          const color = isThemeDark ? '#ffffff' : '#000000'
          const countColor = isThemeDark ? '#cbd5e1' : '#cbd5e1'
          return (
            <GamingVideosContainer>
              {gamingVideos.map(each => (
                <Link
                  to={`/videos/${each.id}`}
                  style={{textDecoration: 'none', flexGrow: 1, display: 'flex'}}
                >
                  <EachVideo key={each.id}>
                    <GameImage src={each.thumbnailUrl} alt="video thumbnail" />
                    <GameTitle color={color}>{each.title}</GameTitle>
                    <GameViewCount
                      color={countColor}
                    >{`${each.viewCount} Watching Worldwide`}</GameViewCount>
                  </EachVideo>
                </Link>
              ))}
            </GamingVideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
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
            <NoResultImage src={failureImage} />
            <NoResultHeader color={isThemeDark ? '#000000' : '#ffffff'}>
              Oops! Something Went Wrong
            </NoResultHeader>
            <NoResultDesc color={isThemeDark ? '#424242' : '##e2e8f0'}>
              We are having some trouble to complete your request.
            </NoResultDesc>
            <NoResultDesc color={isThemeDark ? '#424242' : '##e2e8f0'}>
              Please Try Again.
            </NoResultDesc>
            <RetryBtn type="button" onClick={this.onClickEnter}>
              Retry
            </RetryBtn>
          </NoResultContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  getGamingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  gamingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'SUCCESS':
        return this.successGamingVideos()
      case 'Failure':
        return this.loadFailureView()
      default:
        return this.onLoader()
    }
  }

  render() {
    const {apiStatus} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isThemeDark} = value
          const bgColorCont = isThemeDark ? '#424242' : '#ebebeb'
          const logoBgColor = isThemeDark ? '#000000' : '#cbd5e1'
          const color = isThemeDark ? '#ffffff' : '#000000'
          const bgColor = isThemeDark ? '#0f0f0f' : '#f9f9f9'

          return (
            <HomeContainer data-testid="gaming" bgColor={bgColor}>
              <Header />
              <WatchContainer>
                <SideBar />
                <VideosContainer>
                  <TrendingHeadingContainer
                    data-testid="banner"
                    bgColor={bgColorCont}
                  >
                    <Logo bgColor={logoBgColor}>
                      <SiYoutubegaming fill="#ff0000" />
                    </Logo>
                    <PageHeading color={color}>Gaming</PageHeading>
                  </TrendingHeadingContainer>
                  {apiStatus === 'IN PROGRESS'
                    ? this.onLoader()
                    : this.gamingVideos()}
                </VideosContainer>
              </WatchContainer>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
