import {formatDistanceToNow} from 'date-fns'
import {
  SearchVideoContainer,
  VideoListCard,
  VideoContainer,
  VideoThumbnailImage,
  VideoDetailContainer,
  ProfileImage,
  NavLink,
  VideoDetailCard,
  VideoTitle,
  ChannelName,
  ViewCountContainer,
  ViewCount,
  PublishedAt,
} from './styledComponents'
import ThemeContext from '../../Context/ThemeContext'

const SearchVideos = props => {
  const {searchVideos} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isThemeDark} = value
        const titleColor = isThemeDark ? '#ffffff' : '#000000'

        return (
          <SearchVideoContainer>
            {searchVideos.map(eachVideo => (
              <VideoListCard key={eachVideo.id}>
                <NavLink to={`videos/"${eachVideo.id}`}>
                  <VideoContainer>
                    <VideoThumbnailImage
                      src={eachVideo.thumbnailUrl}
                      alt="thumbnail-image"
                    />
                    <VideoDetailContainer>
                      <ProfileImage
                        src={eachVideo.channel.profileImageUrl}
                        alt="profile-image"
                      />
                      <VideoDetailCard>
                        <VideoTitle color={titleColor}>
                          {eachVideo.title}
                        </VideoTitle>
                        <ChannelName color="#475569">
                          {eachVideo.channel.name}
                        </ChannelName>
                        <ViewCountContainer>
                          <ViewCount color="#475569">{`${eachVideo.viewCount} views .`}</ViewCount>
                          <PublishedAt color="#475569">
                            {`${formatDistanceToNow(
                              new Date(eachVideo.publishedAt),
                            )} ago`}
                          </PublishedAt>
                        </ViewCountContainer>
                      </VideoDetailCard>
                    </VideoDetailContainer>
                  </VideoContainer>
                </NavLink>
              </VideoListCard>
            ))}
          </SearchVideoContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SearchVideos
