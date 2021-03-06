import { gql } from "graphql-request";

export const queries = {
  logoQuery: gql`
    {
      assets {
        id
        url
      }
    }
  `,
  adminInfoQuery: gql`
    {
      adminInfo(where: { id: "ckqcg0808tny90a79kf7f5bnl" }) {
        id
        name
        discordId
        logo {
          url
        }
      }
    }
  `,
  channelImagesQuery: gql`
    {
      channelImages {
        img {
          url
        }
      }
    }
  `,
  musicPublicationsQuery: gql`
    {
      musicPublications {
        username
        img {
          url
        }
        link
        iframe
        artist
        songName
      }
    }
  `,
  voiceUsersQuery: gql`
    {
      voiceUsers {
        name
        logo {
          url
        }
        isStreaming
        path
      }
    }
  `,
  streamingUsersQuery: gql`
    {
      streamingUsers {
        name
        img {
          url
        }
        color
      }
    }
  `,
};
