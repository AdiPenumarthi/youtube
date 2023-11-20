import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {ImFire} from 'react-icons/im'

import SideBar from '../SideBar'
import Header from '../Header'
import SearchVideos from '../SearchVideos'
import FailureView from '../FailureView'
import ThemeContext from '../../Context/ThemeContext'
import {TrendingHeadingContainer, Logo, PageHeading} from './styledComponents'
import {
  WatchContainer,
  HomeContainer,
  VideosContainer,
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
  state = {apiStatus: apiStatusConstants.initial, trendingVideos: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  onLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  loadFailureView = () => <FailureView retry={this.getTrendingVideos} />

  successTrendingVideos = () => {
    const {trendingVideos} = this.state
    if (trendingVideos.length === 0) {
      return this.noSearchResults()
    }
    return <SearchVideos searchVideos={trendingVideos} />
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

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  trendingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'SUCCESS':
        return this.successTrendingVideos()
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
            <HomeContainer data-testid="trending" bgColor={bgColor}>
              <Header />
              <WatchContainer>
                <SideBar />
                <VideosContainer>
                  <TrendingHeadingContainer
                    data-testid="banner"
                    bgColor={bgColorCont}
                  >
                    <Logo bgColor={logoBgColor}>
                      <ImFire fill="#ff0000" />
                    </Logo>
                    <PageHeading color={color}>Trending</PageHeading>
                  </TrendingHeadingContainer>
                  {apiStatus === 'IN PROGRESS'
                    ? this.onLoader()
                    : this.trendingVideos()}
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
