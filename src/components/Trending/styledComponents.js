import styled from 'styled-components'

export const TrendingHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${props => props.bgColor};
  padding: 10px;
  padding-left: 25px;
  justify-content: flex-start;
  align-items: center;
`

export const Logo = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: ${props => props.bgColor};
  font-size: 25px;
  border: none;
  text-align: center;
`

export const PageHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  margin-left: 15px;
`
