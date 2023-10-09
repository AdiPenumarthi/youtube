import {Component} from 'react'
import {ReactPlayer} from 'react-player'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import ThemeContext from '../../Context/ThemeContext'
import FailureView from '../FailureView'
import {
  VideoTitle,
  ViewCountContainer,
  ViewCount,
  PublishedAt,
} from '../SearchVideos/styledComponents'
import {
  VideoItemContainer,
  VideoItemCard,
  VideoPlayer,
  ViewsContainer,
  FeedbackContainer,
  Like,
  Dislike,
  SaveBtn,
  HrLine,
  ProfileContainer,
  ProfileImage,
  ProfileDetailCard,
  ProfileName,
  SubscriberCount,
  Description,
} from './styledComponents'

const apiConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
  inProgress: 'IN PROGRESS',
}

class VideoItemDetails extends Component {
  state = {apiStatus: apiConstants.initial, videoDetails: {}}

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: 'IN PROGRESS'})
    const {id} = this.props
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/:${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.status === 200) {
      const updatedData = {
        videoDetails: {
          id: data.video_details.id,
          title: data.video_details.title,
          videoUrl: data.video_details.video_url,
          thumbnailUrl: data.video_details.thumbnail_url,
          channel: {
            name: data.video_details.channel.name,
            profileImageUrl: data.video_details.channel.profile_image_url,
            subscriberCount: data.video_details.channel.subscriber_count,
          },
          viewCount: data.video_details.view_count,
          publishedAt: data.video_details.published_at,
          description: data.video_details.description,
        },
      }
      this.setState({apiStatus: 'SUCCESS', videoDetails: updatedData})
    } else {
      this.setState({apiStatus: 'FAILURE'})
    }
  }

  getVideoDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'SUCCESS':
        return this.getSuccessView()
      case 'FAILURE':
        return this.getFailureView()
      default:
        return null
    }
  }

  onLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  getFailureView = () => <FailureView retry={this.getVideoItemDetails} />

  getSuccessView = () => {
    const {videoDetails} = this.state
    const {
      title,
      videoUrl,
      thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel

    return (
      <VideoItemCard>
        <VideoPlayer>
          <ReactPlayer
            url={videoUrl}
            light={<img src={thumbnailUrl} alt="Thumbnail" />}
          />
        </VideoPlayer>
        <VideoTitle>{title}</VideoTitle>
        <ViewsContainer>
          <ViewCountContainer>
            <ViewCount color="#475569">{`${viewCount} views .`}</ViewCount>
            <PublishedAt color="#475569">
              {`${formatDistanceToNow(new Date(publishedAt))} ago`}
            </PublishedAt>
          </ViewCountContainer>
          <FeedbackContainer>
            <Like>Like</Like>
            <Dislike>Dislike</Dislike>
            <SaveBtn>Save</SaveBtn>
          </FeedbackContainer>
        </ViewsContainer>
        <HrLine />
        <ProfileContainer>
          <ProfileImage src={profileImageUrl} />
          <ProfileDetailCard>
            <ProfileName>{name}</ProfileName>
            <SubscriberCount>{subscriberCount}</SubscriberCount>
          </ProfileDetailCard>
        </ProfileContainer>
        <Description>{description}</Description>
      </VideoItemCard>
    )
  }

  render() {
    const {apiStatus} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isThemeDark} = value
          return (
            <VideoItemContainer bgColor={isThemeDark ? '#181818' : '#f1f1f1'}>
              <Header />
              {apiStatus === 'IN PROGRESS'
                ? this.onLoader()
                : this.getVideoDetails()}
            </VideoItemContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default VideoItemDetails
