import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SearchVideoContainer = styled.ul`
  width: 100%;
  height: 80%;
  margin-top: 20px;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
`

export const VideoListCard = styled.div`
  flex-grow: 1;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  margin-bottom: 10px;
`

export const NavLink = styled(Link)`
  display: flex;
  margin: 0px;
  padding: 0px;
  flex-grow: 1;
`

export const VideoContainer = styled.li`
  width: 180px;
  height: 220px;
  margin: 0px;
  padding: 10px;
  padding-left: 0px;
  flex-grow: 1;
`

export const VideoThumbnailImage = styled.img`
  width: 100%;
  height: 60%;
  flex-grow: 1;
`

export const VideoDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 5px;
`

export const ProfileImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 12px;
  margin-right: 5px;
`

export const VideoDetailCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  text-decoration: none;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin: 0px;
  color: ${props => props.color};
  text-decoration: none;
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin: 0px;
  margin-top: 5px;
  color: ${props => props.color};
  text-decoration: none;
`

export const ViewCountContainer = styled.div`
  display: flex;
  margin: 0px;
  margin-top: 5px;
`

export const ViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin: 0px;
  padding: 0px;
  color: ${props => props.color};
  text-decoration: none;
`

export const PublishedAt = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin: 0px;
  padding: 0px;
  color: ${props => props.color};
  text-decoration: none;
`
