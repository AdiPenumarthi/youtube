import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const VideoItemCard = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
`
export const VideoPlayer = styled.div`
  width: 100%;
  height: 40%;
`
export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 0px;
  padding: 0px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const ViewContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ViewItemCount = styled.p`
  font-size: 16px;
  font-weight: 500;
`

export const PublishedTime = styled.p`
  font-size: 16px;
  font-weight: 500;
`

export const FeedbackContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`

export const Like = styled.button`
  font-family: 'Roboto';
  color: ${props => props.color};.
  font-weight:500;
  border:none;
  background-color:transparent;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  width:70px;
  font-size:16px;
`
export const DisLike = styled.button`
  font-family: 'Roboto';
  color: ${props => props.color};.
  font-weight:500;
  border:none;
  background-color:transparent;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  width:70px;
  font-size:16px;
`
export const SaveBtn = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70px;
  font-size: 16px;
  color: ${props => props.color};
  font-weight: 500;
`
export const HrLine = styled.hr`
  align-self: center;
  width: 100%;
`
export const ProfileContainer = styled.div`
  display: flex;
`

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`

export const ProfileDetailCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
`

export const ProfileName = styled.p`
  font-family: 'Roboto';
  padding: 0px;
  margin: 0px;
  margin-bottom: 5px;
`
export const SubscriberCount = styled.p`
  font-family: 'Roboto';
  padding: 0px;
  margin: 0px;
`
export const Description = styled.p`
  font-family: 'Roboto';
`
export const VideoItemTitle = styled.h3`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
  font-weight: 600;
  margin-bottom: 0px;
`
