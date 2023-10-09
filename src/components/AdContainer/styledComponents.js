import styled from 'styled-components'

export const AdCardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 25%;
  display: ${props => props.display};
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`

export const AdContent = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const NxtWatchLogo = styled.img`
  height: 30px;
  width: 100px;
`

export const AdDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #000000;
`

export const GetItNowBtn = styled.button`
  border: 1px solid #000000;
  background-color: transparent;
  color: #000000;
  font-family: 'Roboto';
  font-size: 14px;
  height: 36px;
  width: 95px;
`

export const CloseIcon = styled.button`
  margin: 0px;
  padding: 0px;
  border: none;
  background-color: none;
`
