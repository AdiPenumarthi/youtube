import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  background-color: ${props => props.bgColor};

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const FeaturesContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
`

export const LinkItem = styled(Link)`
  width: 100%;
  text-decoration: none;
`

export const TabBtn = styled.li`
  border: none;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 35px;
  background-color: ${props => props.bgColor};
`
export const IconBtn = styled.i`
  border: none;
  margin: 0px;
  padding: 0px;
  color: ${props => props.color};
  font-size: 14px;
  margin: 0px;
  padding: 0px;
  font-size: 18px;
  margin-right: 15px;
`

export const TabName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: '#000000';
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
`

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding-left: 35px;
  margin-bottom: 25px;
  margin-right: 10px;
`

export const ContactUs = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.color};
`

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
`

export const AppLogo = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 15px;
`

export const FooterDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.color};
  width: 80%;
`
