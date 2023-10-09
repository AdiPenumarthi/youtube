import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureImage = styled.img`
  width: 60%;
  height: 60%;
`
export const FailureHeader = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.color};
`
export const FailureDesc = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
`
export const RetryBtn = styled.button`
  width: 80px;
  height: 38px;
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  background-color: #4f46e5;
  border-radius: 5px;
`
