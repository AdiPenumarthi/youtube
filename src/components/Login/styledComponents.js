import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.bgColor};
`

export const LoginContainer = styled.form`
  width: 480px;
  height: 550px;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
  padding-left: 60px;
  padding-right: 60px;
  border-radius: 15px;
  box-shadow: 10px 10px 10px 10px ${props => props.shadowColor};
`

export const AppLogo = styled.img`
  width: 180px;
  height: 60px;
  align-self: center;
  margin-bottom: 30px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 0px;
  width: 100%;
`

export const Label = styled.label`
  font-family: Roboto;
  font-size: 17px;
  color: #94a3b8;
  margin-bottom: 10px;
`

export const Input = styled.input`
  font-family: Roboto;
  font-size: 16px;
  color: #94a3b8;
  border: 1px solid #94a3b8;
  height: 50px;
  padding-left: 15px;
  width: 100%;
  margin-bottom: 25px;
  outline-style: none;
  border-radius: 8px;
`

export const ShowPassword = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`

export const CheckInput = styled.input`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`

export const ShowPasswordLabel = styled.label`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => props.color};
`

export const ShowError = styled.p`
  font-family: Roboto;
  font-size: 16px;
  color: #ff0000;
`

export const LoginBtn = styled.button`
  height: 38px;
  width: 100%;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: Roboto;
  font-size: 14px;
  text-align: center;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 30px;
`
