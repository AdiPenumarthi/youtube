import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BiListPlus} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'
import {ImFire} from 'react-icons/im'
import {SiYoutubegaming} from 'react-icons/si'
import ThemeContext from '../../Context/ThemeContext'
import {
  SideBarContainer,
  FeaturesContainer,
  TabBtn,
  IconBtn,
  TabName,
  FooterSection,
  ContactUs,
  SocialMediaContainer,
  AppLogo,
  FooterDescription,
} from './styledComponents'

class SideBar extends Component {
  state = {activeTabId: 'HOME'}

  changeActiveTab = tabId => {
    this.setState({activeTabId: tabId})
  }

  changeActiveTabToHome = () => {
    this.setState({activeTabId: 'HOME'})
  }

  changeActiveTabToTrending = () => {
    this.setState({activeTabId: 'TRENDING'})
  }

  changeActiveTabToGaming = () => {
    this.setState({activeTabId: 'GAMING'})
  }

  changeActiveTabToSavedVideos = () => {
    this.setState({activeTabId: 'SAVED VIDEOS'})
  }

  render() {
    const {activeTabId} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isThemeDark} = value
          const bgColor = isThemeDark ? '#424242' : '#f1f5f9'
          const iconColor = isThemeDark ? ' #d7dfe9' : '#475569'

          return (
            <SideBarContainer bgColor={isThemeDark ? '#212121' : '##f9f9f9'}>
              <FeaturesContainer>
                <TabBtn
                  type="button"
                  onClick={this.changeActiveTabToHome}
                  bgColor={
                    activeTabId === 'HOME' ? `${bgColor}` : 'transparent'
                  }
                >
                  <IconBtn
                    color={activeTabId === 'HOME' ? '#ff0000' : `${iconColor}`}
                    type="button"
                  >
                    <AiFillHome />
                  </IconBtn>
                  <TabName
                    fontWeight={activeTabId === 'HOME' ? '600' : 'none'}
                    color={iconColor}
                  >
                    HOME
                  </TabName>
                </TabBtn>
                <TabBtn
                  type="button"
                  onClick={this.changeActiveTabToTrending}
                  bgColor={
                    activeTabId === 'TRENDING' ? `${bgColor}` : 'transparent'
                  }
                >
                  <IconBtn
                    color={
                      activeTabId === 'TRENDING' ? '#ff0000' : `${iconColor}`
                    }
                    type="button"
                  >
                    <ImFire />
                  </IconBtn>
                  <TabName
                    fontWeight={activeTabId === 'TRENDING' ? '600' : 'none'}
                    color={iconColor}
                  >
                    TRENDING
                  </TabName>
                </TabBtn>
                <TabBtn
                  type="button"
                  onClick={this.changeActiveTabToGaming}
                  bgColor={
                    activeTabId === 'GAMING' ? `${bgColor}` : 'transparent'
                  }
                >
                  <IconBtn
                    color={
                      activeTabId === 'GAMING' ? '#ff0000' : `${iconColor}`
                    }
                    type="button"
                  >
                    <SiYoutubegaming />
                  </IconBtn>
                  <TabName
                    fontWeight={activeTabId === 'GAMING' ? '600' : 'none'}
                    color={iconColor}
                  >
                    GAMING
                  </TabName>
                </TabBtn>
                <TabBtn
                  type="button"
                  onClick={this.changeActiveTabToSavedVideos}
                  bgColor={
                    activeTabId === 'SAVED VIDEOS'
                      ? `${bgColor}`
                      : 'transparent'
                  }
                >
                  <IconBtn
                    color={
                      activeTabId === 'SAVED VIDEOS'
                        ? '#ff0000'
                        : `${iconColor}`
                    }
                    type="button"
                  >
                    <BiListPlus />
                  </IconBtn>
                  <TabName
                    fontWeight={activeTabId === 'SAVED VIDEOS' ? '600' : 'none'}
                    color={iconColor}
                  >
                    SAVED VIDEOS
                  </TabName>
                </TabBtn>
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
                  Enjoy! Now to see your channels and recommedations!
                </FooterDescription>
              </FooterSection>
            </SideBarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SideBar
