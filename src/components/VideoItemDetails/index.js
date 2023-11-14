import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
} from 'react-icons/ai'

import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../Context/ThemeContext'
import FailureView from '../FailureView'

import {
  VideoItemContainer,
  VideoItemCard,
  VideoPlayer,
  VideoItemTitle,
  ViewsContainer,
  ViewContainer,
  ViewItemCount,
  PublishedTime,
  FeedbackContainer,
  Like,
  DisLike,
  SaveBtn,
  HrLine,
  ProfileContainer,
  ProfileImage,
  ProfileDetailCard,
  ProfileName,
  SubscriberCount,
  Description,
} from './styledComponents'
import {
  HomeContainer,
  WatchContainer,
  VideosContainer,
} from '../Home/styledComponents'

const apiConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
  inProgress: 'IN PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiConstants.initial,
    videoDetails: {},
    isVideoSaved: false,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: 'IN PROGRESS'})
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
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
      }
      this.setState({
        apiStatus: apiConstants.success,
        videoDetails: updatedData,
      })
    } else {
      // console.log(response.status)
      this.setState({apiStatus: 'FAILURE'})
    }
  }

  getVideoDetails = () => {
    const {apiStatus} = this.state
    // console.log(apiStatus)

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

    const likeVideo = () => {
      const {isDisliked} = this.state
      if (isDisliked) {
        this.setState(prevState => ({isDisliked: !prevState.isDisliked}))
        this.setState(prevState => ({isLiked: !prevState.isLiked}))
      } else {
        this.setState(prevState => ({isLiked: !prevState.isLiked}))
      }
    }

    const disLikeVideo = () => {
      const {isLiked} = this.state
      if (isLiked) {
        this.setState(prevState => ({isLiked: !prevState.isLiked}))
        this.setState(prevState => ({isDisliked: !prevState.isDisliked}))
      } else {
        this.setState(prevState => ({isDisliked: !prevState.isDisliked}))
      }
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isThemeDark, savedVideosList, updateSavedVideosList} = value
          const {isVideoSaved, isLiked, isDisliked} = this.state
          const textColor = isThemeDark ? '#ffffff' : '#000000'
          const saveBtnColor = isVideoSaved ? '#2563eb' : `#64748b`
          const likeBtnColor = isLiked ? '#2563eb' : `#64748b`
          const disLikedBtnColor = isDisliked ? '#2563eb' : `#64748b`
          const saveBtnText = isVideoSaved ? 'Saved' : 'Save'

          const updateList = () => {
            let updatedSavedList
            if (!isVideoSaved) {
              updatedSavedList = [...savedVideosList, videoDetails]
              console.log('save')
            } else {
              updatedSavedList = savedVideosList.filter(
                item => item.id !== videoDetails.id,
              )
            }
            updateSavedVideosList(updatedSavedList)
          }

          const saveVideo = () => {
            this.setState(
              prevState => ({
                isVideoSaved: !prevState.isVideoSaved,
              }),
              updateList,
            )
          }

          return (
            <VideoItemCard>
              <VideoPlayer>
                <ReactPlayer
                  url={videoUrl}
                  light={<img src={thumbnailUrl} alt="Thumbnail" />}
                  width="100%"
                  height="100%"
                />
              </VideoPlayer>
              <VideoItemTitle color={textColor}>{title}</VideoItemTitle>
              <ViewsContainer>
                <ViewContainer>
                  <ViewItemCount
                    color={textColor}
                  >{`${viewCount} views .`}</ViewItemCount>
                  <PublishedTime color={textColor}>
                    {`${formatDistanceToNow(new Date(publishedAt))} ago`}
                  </PublishedTime>
                </ViewContainer>
                <FeedbackContainer>
                  <Like color={likeBtnColor} onClick={likeVideo}>
                    {isLiked ? <AiFillLike /> : <AiOutlineLike />} Like
                  </Like>
                  <DisLike color={disLikedBtnColor} onClick={disLikeVideo}>
                    {isDisliked ? <AiFillDislike /> : <AiOutlineDislike />}
                    Dislike
                  </DisLike>
                  <SaveBtn color={saveBtnColor} onClick={saveVideo}>
                    <MdPlaylistAdd />
                    <span>{saveBtnText}</span>
                  </SaveBtn>
                </FeedbackContainer>
              </ViewsContainer>
              <HrLine />
              <ProfileContainer>
                <ProfileImage src={profileImageUrl} />
                <ProfileDetailCard>
                  <ProfileName color={textColor}>{name}</ProfileName>
                  <SubscriberCount color={textColor}>
                    {`${subscriberCount} Subscribers`}
                  </SubscriberCount>
                </ProfileDetailCard>
              </ProfileContainer>
              <Description color={textColor}>{description}</Description>
            </VideoItemCard>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  render() {
    const {apiStatus} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isThemeDark} = value
          const bgColor = isThemeDark ? '#0f0f0f' : '#f9f9f9'

          return (
            <HomeContainer bgColor={bgColor} data-testid="videoItemDetails">
              <Header />
              <WatchContainer>
                <SideBar />
                <VideosContainer>
                  <VideoItemContainer
                    data-tesid="videoItemDetails"
                    bgColor={isThemeDark ? '#0f0f0f' : '#f9f9f9'}
                  >
                    {apiStatus === 'IN PROGRESS'
                      ? this.onLoader()
                      : this.getVideoDetails()}
                  </VideoItemContainer>
                </VideosContainer>
              </WatchContainer>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default VideoItemDetails
