import styled from 'styled-components'

export const NotFoundImage = styled.img`
  margin-top: 100px;
  width: 100%;
  height: 60%;
  padding-left: 20px;
  padding-right: 20px;
  align-self: center;
  justify-self: center;

  @media (min-width: 768px) {
    width: 60%;
  }
`

export const PageNotFoundText = styled.h1`
  font-weight: bold;
  font-size: 24px;
  align-self: center;
  color: ${props => props.color};
`

export const NotFoundDesc = styled.p`
  font-size: 16px;
  color: ${props => props.color};
  align-self: center;
`
