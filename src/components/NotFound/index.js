import ThemeContext from '../../Context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  HomeContainer,
  WatchContainer,
  VideosContainer,
} from '../Home/styledComponents'
import {NotFoundImage, PageNotFoundText, NotFoundDesc} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isThemeDark} = value
      const imageUrl = isThemeDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      const bgColor = isThemeDark ? '#000000' : '#ffffff'
      const textColor = isThemeDark ? '#ffffff' : '#000000'
      return (
        <HomeContainer bgColor={bgColor}>
          <Header />
          <WatchContainer>
            <SideBar />
            <VideosContainer>
              <NotFoundImage src={imageUrl} alt="not found" />
              <PageNotFoundText color={textColor}>
                Page Not Found
              </PageNotFoundText>
              <NotFoundDesc color={textColor}>
                We are sorry, the page you request could not be found.
              </NotFoundDesc>
            </VideosContainer>
          </WatchContainer>
        </HomeContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
