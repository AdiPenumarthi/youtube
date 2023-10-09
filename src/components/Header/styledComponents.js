import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
`

export const HeaderLogo = styled.img`
  width: 150px;
  height: 40px;

  @media screen and (max-width: 576px) {
    width: 120px;
    height: 30px;
  }
`

export const HeaderItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`

export const ThemeBtn = styled.button`
  margin: 0px;
  padding: 0px;
  border: none;
  font-size: 20px;
  background-color: transparent;
  color: ${props => props.color};
  margin-right: 18px;
  position: center;
`

export const HamburgerMenu = styled.button`
  margin: 0px;
  padding: 0px;
  border: none;
  font-size: 20px;
  color: ${props => props.color};
  background-color: transparent;
  margin-right: 18px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ProfileImg = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 18px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LogoutBtnSmall = styled.button`
  margin: 0px;
  padding: 0px;
  border: none;
  font-size: 18px;
  color: ${props => props.color};
  background-color: transparent;
  margin-right: 18px;

  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const LogoutBtnLarge = styled.button`
  width: 80px;
  height: 36px;
  background-color: transparent;
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  text-align: center;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  margin-right: 10px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`
