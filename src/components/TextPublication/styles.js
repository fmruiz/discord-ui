const { default: styled } = require("styled-components");

export const TextPublicationContainer = styled.div`
  display: flex;
  padding-top: 5px;
  padding-left: 15px;
  padding-bottom: 5px;
  margin-right: 4px;

  :hover {
    background-color: ${(props) => props.theme.COLORS.musicGray};
  }

  .admin {
    color: ${(props) => props.theme.COLORS.green};
  }
`;

export const UserImgContainer = styled.div`
  width: 45px;
`;

export const UserImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

export const UserPublicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const UserName = styled.a`
  margin: 0;
  color: ${(props) => props.theme.COLORS.white};

  :hover {
    text-decoration: underline;
  }
`;

export const UserNameText = styled.p`
  margin: 0;
  color: ${(props) => props.theme.COLORS.white};
  width: 60vw;
`;
