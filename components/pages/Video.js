import styled from "styled-components";

const VideoStyles = styled.div`
  max-width: 1100px;
  margin: 100px auto;
  position: relative;
`;

export default function Video({ video }) {
  return (
    <>
      <VideoStyles>
        {video?.url.includes("youtu") && (
          <div className="iframe-container">
            <iframe
              title={video?.title}
              src={`https://www.youtube.com/embed/${video?.providerUid}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
        {video?.url.includes("vimeo") && (
          <div className="iframe-container">
            <iframe
              title={video?.title}
              src={`https://player.vimeo.com/video/${video?.providerUid}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </VideoStyles>
    </>
  );
}
