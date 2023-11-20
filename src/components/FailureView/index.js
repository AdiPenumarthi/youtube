import ThemeContext from '../../Context/ThemeContext'
import {
  FailureViewContainer,
  FailureImage,
  FailureHeader,
  FailureDesc,
  RetryBtn,
} from './styledComponents'

const FailureView = props => {
  const {retry} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isThemeDark} = value
        const failureImage = isThemeDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        const retryData = () => {
          retry()
        }

        return (
          <FailureViewContainer>
            <FailureImage src={failureImage} alt="failure view" />
            <FailureHeader color={isThemeDark ? '#000000' : '#ffffff'}>
              Oops! Something Went Wrong
            </FailureHeader>
            <FailureDesc color={isThemeDark ? '#424242' : '##e2e8f0'}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDesc>
            <RetryBtn type="button" onClick={retryData}>
              Retry
            </RetryBtn>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default FailureView
