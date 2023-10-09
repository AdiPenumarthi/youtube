import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../Context/ThemeContext'
import {
  AppContainer,
  LoginContainer,
  AppLogo,
  InputContainer,
  Label,
  Input,
  CheckInput,
  ShowPassword,
  ShowPasswordLabel,
  ShowError,
  LoginBtn,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isChecked: false,
    errorMsg: '',
    isSubmitError: false,
  }

  changeInputName = event => {
    this.setState({username: event.target.value})
  }

  changeInputPassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheck = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  onSuccessSubmit = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFailureSubmit = errorMsg => {
    this.setState({isSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)

    if (response.ok === true) {
      this.onSuccessSubmit(data.jwt_token)
    } else {
      this.onFailureSubmit(data.error_msg)
    }
  }

  render() {
    const {username, password, isChecked, errorMsg, isSubmitError} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isThemeDark} = value
          const appLogo = isThemeDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const checked = isChecked ? 'checked' : ''
          return (
            <AppContainer bgColor={isThemeDark ? ' #231f20' : '#f9f9f9'}>
              <LoginContainer
                bgColor={isThemeDark ? ' #0f0f0f' : '#ffffff'}
                shadowColor={isThemeDark ? 'transparent' : '#ebebeb'}
                onSubmit={this.submitForm}
              >
                <AppLogo src={appLogo} />
                <InputContainer>
                  <Label>USERNAME</Label>
                  <Input
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={this.changeInputName}
                  />
                </InputContainer>
                <InputContainer>
                  <Label>PASSWORD</Label>
                  <Input
                    type={isChecked ? 'text' : 'password'}
                    value={password}
                    placeholder="Password"
                    onChange={this.changeInputPassword}
                  />
                </InputContainer>
                <ShowPassword>
                  <CheckInput
                    type="checkbox"
                    id="check"
                    checked={checked}
                    onChange={this.onChangeCheck}
                  />
                  <ShowPasswordLabel
                    color={isThemeDark ? '#ffffff' : '#000000'}
                    htmlFor="check"
                  >
                    Show Password
                  </ShowPasswordLabel>
                </ShowPassword>
                {isSubmitError && <ShowError>*{errorMsg}</ShowError>}
                <LoginBtn type="submit">Login</LoginBtn>
              </LoginContainer>
            </AppContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
