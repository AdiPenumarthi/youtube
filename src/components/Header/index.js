import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import {BsSun} from 'react-icons/bs'
import {HiMoon} from 'react-icons/hi'
import {FiLogOut, FiMenu} from 'react-icons/fi'
import Popup from 'reactjs-popup'
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
  PopupContainer,
  Logout,
  ConfirmationText,
  CancelBtn,
  ButtonsContainer,
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
        const color = isThemeDark ? '#ffffff' : '#000000'
        const cancelBtnColor = isThemeDark ? '#cbd5e1' : '#cbd5e1'

        const onClickChangeTheme = () => {
          changeTheme()
        }

        return (
          <HeaderContainer bgColor={isThemeDark ? '#212121' : '#f9f9f9'}>
            <Link to="/">
              <HeaderLogo src={logoUrl} alt="website logo" />
            </Link>
            <HeaderItemsContainer>
              <ThemeBtn
                type="button"
                onClick={onClickChangeTheme}
                color={isThemeDark ? '#ffffff' : '#000000'}
                data-testid="theme"
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
              <Popup
                modal
                trigger={
                  <Logout>
                    <LogoutBtnSmall
                      type="button"
                      color={isThemeDark ? '#ffffff' : '#000000'}
                    >
                      <FiLogOut />
                    </LogoutBtnSmall>
                    <LogoutBtnLarge type="button" color={btnColor}>
                      Logout
                    </LogoutBtnLarge>
                  </Logout>
                }
                position="right center"
                className="popup-content"
              >
                {close => (
                  <PopupContainer bgColor={isThemeDark ? '#212121' : '#f9f9f9'}>
                    <ConfirmationText color={color}>
                      Are you sure you want to logout?
                    </ConfirmationText>
                    <ButtonsContainer>
                      <CancelBtn
                        type="button"
                        color={cancelBtnColor}
                        onClick={() => close()}
                      >
                        Cancel
                      </CancelBtn>
                      <LogoutBtnLarge
                        type="button"
                        color={btnColor}
                        onClick={onClickLogout}
                      >
                        Confirm
                      </LogoutBtnLarge>
                    </ButtonsContainer>
                  </PopupContainer>
                )}
              </Popup>
            </HeaderItemsContainer>
          </HeaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
