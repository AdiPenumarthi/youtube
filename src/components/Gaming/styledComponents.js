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
export const GamingVideosContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  overflow-y: scroll;
  background-color: ${props => props.bgColor};
  text-decoration: none;
  list-style-type: none;
`

export const EachVideo = styled.li`
  width: 180px;
  max-width: 250px;
  min-height: 220px;
  margin: 0px;
  padding: 10px;
  padding-left: 0px;
  flex-grow: 1;
`

export const GameImage = styled.img`
  width: 100%;
  height: 140px;
`

export const GameTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.color};
  margin: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const GameViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.color};
  margin: 0px;
`
