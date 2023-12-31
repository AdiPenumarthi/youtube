import {BiListPlus} from 'react-icons/bi'

import ThemeContext from '../../Context/ThemeContext'
import SearchVideos from '../SearchVideos'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  WatchContainer,
  VideosContainer,
  HomeContainer,
  NoResultContainer,
  NoResultDesc,
  NoResultHeader,
  NoResultImage,
} from '../Home/styledComponents'

import {
  TrendingHeadingContainer,
  Logo,
  PageHeading,
} from '../Trending/styledComponents'

const SavedVideos = () => {
  const noSearchResults = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isThemeDark} = value
        const failureImage =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'
        return (
          <NoResultContainer>
            <NoResultImage src={failureImage} alt="no saved videos" />
            <NoResultHeader color={isThemeDark ? '#000000' : '#ffffff'}>
              No saved videos found
            </NoResultHeader>
            <NoResultDesc color={isThemeDark ? '#424242' : '##e2e8f0'}>
              Save your videos by clicking a button
            </NoResultDesc>
          </NoResultContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isThemeDark, savedVideosList} = value
        const bgColorCont = isThemeDark ? '#424242' : '#ebebeb'
        const logoBgColor = isThemeDark ? '#000000' : '#cbd5e1'
        const color = isThemeDark ? '#ffffff' : '#000000'
        const bgColor = isThemeDark ? '#0f0f0f' : '#f9f9f9'

        return (
          <HomeContainer data-testid="savedVideos" bgColor={bgColor}>
            <Header />
            <WatchContainer>
              <SideBar />
              <VideosContainer>
                <TrendingHeadingContainer
                  data-testid="banner"
                  bgColor={bgColorCont}
                >
                  <Logo bgColor={logoBgColor}>
                    <BiListPlus fill="#ff0000" />
                  </Logo>
                  <PageHeading color={color}>Saved Videos</PageHeading>
                </TrendingHeadingContainer>
                {savedVideosList.length === 0 ? (
                  noSearchResults()
                ) : (
                  <SearchVideos searchVideos={savedVideosList} />
                )}
              </VideosContainer>
            </WatchContainer>
          </HomeContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default SavedVideos
