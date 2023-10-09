import {Component} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {
  AdCardContainer,
  AdContent,
  NxtWatchLogo,
  AdDescription,
  GetItNowBtn,
  CloseIcon,
} from './styledComponents'

class AdContainer extends Component {
  state = {closeBanner: false}

  closeBanner = () => {
    this.setState({closeBanner: true})
  }

  render() {
    const {closeBanner} = this.state
    const displayBanner = closeBanner ? 'none' : 'flex'
    return (
      <AdCardContainer display={displayBanner}>
        <AdContent>
          <NxtWatchLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt-watch-logo"
          />
          <AdDescription>
            Buy Nxt Watch Premium prepaid plans with UPI
          </AdDescription>
          <GetItNowBtn type="button">GET IT NOW</GetItNowBtn>
        </AdContent>
        <CloseIcon type="button" onClick={this.closeBanner}>
          <AiOutlineClose />
        </CloseIcon>
      </AdCardContainer>
    )
  }
}

export default AdContainer
