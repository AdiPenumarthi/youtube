import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  width: 100;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const VideoItemCard = styled.div`
  width: 100;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const VideoPlayer = styled.div`
  width: 100%;
  height: 40%;
`
export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const FeedbackContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Like = styled.p`
  font-family: 'Roboto';
`
export const Dislike = styled.p`
  font-family: 'Roboto';
`
export const SaveBtn = styled.button`
  border: none;
`
export const HrLine = styled.hr`
  align-self: center;
  width: 90%;
`
export const ProfileContainer = styled.div`
  display: flex;
`

export const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
`

export const ProfileDetailCard = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileName = styled.p`
  font-family: 'Roboto';
`
export const SubscriberCount = styled.p`
  font-family: 'Roboto';
`
export const Description = styled.p`
  font-family: 'Roboto';
`
