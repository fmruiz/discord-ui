import styled from "styled-components/macro";

export const SidebarContainer = styled.div`
  width: 3.8%;
  height: 100vh;
  margin: 0;
  background-color: ${(props) => props.theme.COLORS.sidebar};
  display: flex;
  flex-direction: column;

  .logo__discord {
    filter: grayscale(1);
    transition: all 0.5s;

    :hover {
      filter: grayscale(0);
      transition: all 0.5s;
    }
  }
`;

export const SidebarImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 10px auto 0px auto;
  transition: all 0.5s;

  :hover {
    border-radius: 30%;
    transition: border-radius 0.5s;
    cursor: pointer;
  }
`;

export const Divider = styled.div`
  margin: 10px auto 0px auto;
  width: 2vw;
  border-bottom: 2px solid ${(props) => props.theme.COLORS.gray};
`;

export const AddServer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 10px auto 0px auto;
  transition: all 0.5s;
  background-color: ${(props) => props.theme.COLORS.gray};

  .group__icon {
    color: ${(props) => props.theme.COLORS.plusIconSidebar};
    transition: all 0.5s;
  }

  :hover {
    border-radius: 30%;
    cursor: pointer;
    transition: all 0.5s;
    background-color: ${(props) => props.theme.COLORS.plusIconSidebar};;

    .group__icon {
      color: white;
      transition: all 0.5s;
    }
  }
`;
