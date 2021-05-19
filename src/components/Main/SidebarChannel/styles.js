import styled from "styled-components/macro";

export const SidebarChannelContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.COLORS.gray};
  width: 12.5vw;
`;

export const SidebarChannelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.COLORS.black};
  height: 5%;
  padding-left: 15px;
  padding-right: 15px;
  transition: background-color 0.5s;

  :hover {
    background-color: ${(props) => props.theme.COLORS.mediumGray};
    transition: background-color 0.5s;
  }

  .fontawesome__icon {
    color: ${(props) => props.theme.COLORS.white};
    margin: auto 0;
  }
`;

export const NameChannel = styled.h3`
  font-size: 1.8vh;
  color: ${(props) => props.theme.COLORS.white};
  margin: auto 0;
  font-weight: bold;
`;

export const ChannelContainer = styled.div`
  height: 88%;
  margin: 20px 15px 20px 15px;
  display: flex;
  flex-direction: column;
`;

export const ChannelTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .fontawesome__add {
    font-size: 1.4vh;
    color: ${(props) => props.theme.COLORS.lightGray};
  }
`;

export const ChannelTitle = styled.div`
  display: flex;
  align-items: center;

  .fontawesome__title {
    font-size: 1vh;
    color: ${(props) => props.theme.COLORS.lightGray};
    padding-right: 5px;
  }
`;

export const Title = styled.p`
  font-size: 1.4vh;
  color: ${(props) => props.theme.COLORS.lightGray};
  margin: 0;
  transition: color 0.5s;

  :hover {
    color: ${(props) => props.theme.COLORS.white};
    transition: color 0.5s;
  }
`;
