import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {BsSun} from 'react-icons/bs'
import {HiMoon} from 'react-icons/hi'
import {FiLogOut, FiMenu} from 'react-icons/fi'
import ThemeContext from '../../Context/ThemeContext'
import {
  HeaderContainer,
  HeaderLogo,
  HeaderItemsContainer,
  ThemeBtn,
  HamburgerMenu,
  ProfileImg,
  LogoutBtnSmall,
  LogoutBtnLarge,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isThemeDark, changeTheme} = value
        const logoUrl = isThemeDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        const btnColor = isThemeDark ? '#ffffff' : '#3b82f6'

        const onClickChangeTheme = () => {
          changeTheme()
        }
        return (
          <HeaderContainer bgColor={isThemeDark ? '#212121' : '#f9f9f9'}>
            <HeaderLogo src={logoUrl} alt="nxt-watch-logo" />
            <HeaderItemsContainer>
              <ThemeBtn
                type="button"
                onClick={onClickChangeTheme}
                color={isThemeDark ? '#ffffff' : '#000000'}
              >
                {isThemeDark ? <BsSun /> : <HiMoon />}
              </ThemeBtn>
              <HamburgerMenu
                type="button"
                color={isThemeDark ? '#ffffff' : '#000000'}
              >
                <FiMenu />
              </HamburgerMenu>
              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <LogoutBtnSmall
                type="button"
                onClick={onClickLogout}
                color={isThemeDark ? '#ffffff' : '#000000'}
              >
                <FiLogOut />
              </LogoutBtnSmall>
              <LogoutBtnLarge
                type="button"
                onClick={onClickLogout}
                color={btnColor}
              >
                Logout
              </LogoutBtnLarge>
            </HeaderItemsContainer>
          </HeaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
