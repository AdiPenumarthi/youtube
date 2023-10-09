import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.bgColor};
`
export const WatchContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  margin: 0px;
  padding: 0px;
`

export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
export const VideoListContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 20px 20px;
  flex-grow: 1;
`
export const SearchContainer = styled.div`
  width: 60%;
  height: 38px;
  border: 0.5px solid ${props => props.borderColor};
  background-color: transparent;
  display: flex;
`
export const SearchBar = styled.input`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 16px;
  width: 100%;
  height: 38px;
  border: none;
  background-color: transparent;
  padding-left: 15px;
  outline: none;
`
export const SearchIconBtn = styled.button`
  width: 60px;
  height: 38px;
  border: none;
  background-color: #d7dfe9;
  text-align: center;
  font-size: 16px;
  border: 1px solid ${props => props.color};
`
export const NoResultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoResultImage = styled.img`
  width: 60%;
  height: 60%;
`
export const NoResultHeader = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.color};
`
export const NoResultDesc = styled.p`
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
