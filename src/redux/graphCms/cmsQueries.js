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
};
