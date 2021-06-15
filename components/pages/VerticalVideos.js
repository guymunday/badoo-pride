import styled from "styled-components";

const VVStyles = styled.div`
  display: flex;
  max-width: 1100px;
  margin: 100px auto 60px auto;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
  .vertical-iframe-container {
    flex: 1;
    max-width: 550px;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    &:first-child {
      margin-right: 20px;
      @media screen and (max-width: 600px) {
        margin: 0;
        margin-bottom: 30px;
      }
    }
    &:last-child {
      margin-left: 20px;
      @media screen and (max-width: 600px) {
        margin: 0;
      }
    }
    &:only-child {
      margin: 0;
    }
  }
`;

export default function VerticalVideos({ input }) {
  return (
    <>
      <VVStyles>
        {input?.verticalVideoOne.url.includes("youtu") && (
          <div className="vertical-iframe-container">
            <div className="vertical-iframe">
              <iframe
                title={input?.verticalVideoOne?.title}
                src={`https://www.youtube.com/embed/${input?.verticalVideoOne?.providerUid}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
        {input?.verticalVideoOne?.url.includes("vimeo") && (
          <div className="vertical-iframe-container">
            <div className="vertical-iframe">
              <iframe
                title={input?.verticalVideoOne?.title}
                src={`https://player.vimeo.com/video/${input?.verticalVideoOne?.providerUid}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
        {input?.verticalVideoTwo &&
          input?.verticalVideoTwo.url.includes("youtu") && (
            <div className="vertical-iframe-container">
              <div className="vertical-iframe">
                <iframe
                  title={input?.verticalVideoTwo?.title}
                  src={`https://www.youtube.com/embed/${input?.verticalVideoTwo?.providerUid}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        {input?.verticalVideoTwo &&
          input?.verticalVideoTwo?.url.includes("vimeo") && (
            <div className="vertical-iframe-container">
              <div className="vertical-iframe">
                <iframe
                  title={input?.verticalVideoOne?.title}
                  src={`https://player.vimeo.com/video/${input?.verticalVideoTwo?.providerUid}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
      </VVStyles>
    </>
  );
}
