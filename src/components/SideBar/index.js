import {BiListPlus} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'
import {ImFire} from 'react-icons/im'
import {SiYoutubegaming} from 'react-icons/si'
import ThemeContext from '../../Context/ThemeContext'
import {
  SideBarContainer,
  FeaturesContainer,
  LinkItem,
  TabBtn,
  IconBtn,
  TabName,
  FooterSection,
  ContactUs,
  SocialMediaContainer,
  AppLogo,
  FooterDescription,
} from './styledComponents'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isThemeDark, activeTab, changeTab} = value
      const bgColor = isThemeDark ? '#424242' : '#f1f5f9'
      const iconColor = isThemeDark ? ' #d7dfe9' : '#475569'

      const changeActiveTabToHome = () => {
        changeTab('HOME')
      }

      const changeActiveTabToTrending = () => {
        changeTab('TRENDING')
      }

      const changeActiveTabToGaming = () => {
        changeTab('GAMING')
      }

      const changeActiveTabToSavedVideos = () => {
        changeTab('SAVED VIDEOS')
      }

      return (
        <SideBarContainer bgColor={isThemeDark ? '#212121' : '##f9f9f9'}>
          <FeaturesContainer>
            <LinkItem to="/">
              <TabBtn
                onClick={changeActiveTabToHome}
                bgColor={activeTab === 'HOME' ? `${bgColor}` : 'transparent'}
              >
                <IconBtn
                  color={activeTab === 'HOME' ? '#ff0000' : `${iconColor}`}
                  type="button"
                >
                  <AiFillHome />
                </IconBtn>
                <TabName
                  fontWeight={activeTab === 'HOME' ? '600' : 'none'}
                  color={iconColor}
                >
                  HOME
                </TabName>
              </TabBtn>
            </LinkItem>
            <LinkItem to="/trending">
              <TabBtn
                type="button"
                bgColor={
                  activeTab === 'TRENDING' ? `${bgColor}` : 'transparent'
                }
                onClick={changeActiveTabToTrending}
              >
                <IconBtn
                  color={activeTab === 'TRENDING' ? '#ff0000' : `${iconColor}`}
                  type="button"
                >
                  <ImFire />
                </IconBtn>
                <TabName
                  fontWeight={activeTab === 'TRENDING' ? '600' : 'none'}
                  color={iconColor}
                >
                  TRENDING
                </TabName>
              </TabBtn>
            </LinkItem>
            <LinkItem to="/gaming">
              <TabBtn
                type="button"
                onClick={changeActiveTabToGaming}
                bgColor={activeTab === 'GAMING' ? `${bgColor}` : 'transparent'}
              >
                <IconBtn
                  color={activeTab === 'GAMING' ? '#ff0000' : `${iconColor}`}
                  type="button"
                >
                  <SiYoutubegaming />
                </IconBtn>
                <TabName
                  fontWeight={activeTab === 'GAMING' ? '600' : 'none'}
                  color={iconColor}
                >
                  GAMING
                </TabName>
              </TabBtn>
            </LinkItem>
            <LinkItem to="/saved-videos">
              <TabBtn
                type="button"
                onClick={changeActiveTabToSavedVideos}
                bgColor={
                  activeTab === 'SAVED VIDEOS' ? `${bgColor}` : 'transparent'
                }
              >
                <IconBtn
                  color={
                    activeTab === 'SAVED VIDEOS' ? '#ff0000' : `${iconColor}`
                  }
                  type="button"
                >
                  <BiListPlus />
                </IconBtn>
                <TabName
                  fontWeight={activeTab === 'SAVED VIDEOS' ? '600' : 'none'}
                  color={iconColor}
                >
                  SAVED VIDEOS
                </TabName>
              </TabBtn>
            </LinkItem>
          </FeaturesContainer>
          <FooterSection>
            <ContactUs color={iconColor}>CONTACT US</ContactUs>
            <SocialMediaContainer>
              <AppLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <AppLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <AppLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaContainer>
            <FooterDescription color={iconColor}>
              Enjoy! Now to see your channels and recommendations!
            </FooterDescription>
          </FooterSection>
        </SideBarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
