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
      }
    }
  `,
  adminLogoQuery: gql`
    {
      adminLogo(where: { id: "ckqfcu6nsa5k50a76ofa64ui2" }) {
        logo {
          url
        }
      }
    }
  `,
};
