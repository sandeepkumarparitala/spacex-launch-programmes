import styled from "styled-components";
// https://styled-components.com/ refer this for styled components architechture

const breakpoints = {
  SM: "700px",
  MD: "1024",
  LG: "1440px",
};

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  overflow-y: auto;
`;

export const Header = styled.div`
  font-size: 32px;
  color: black;
  font-weight: 600;
  padding: 10px 20px;
`;

export const ViewSection = styled.div`
  padding: 20px;
  display: flex;
  flex: 1;
  @media screen and (max-width: ${breakpoints.SM}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LoaderAligner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SideBar = styled.div`
  margin: 0 0 20px 0;
`;

export const FiltersSection = styled.div`
  background-color: #fff;
  padding: 20px 30px;
  border-radius: 5px;
  @media screen and (max-width: ${breakpoints.SM}) {
    margin: auto;
  }
`;

export const SideBarHearder = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

export const FilterType = styled.div`
  margin: 20px 0px;
`;

export const GridAligner = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 25px 50px;
  cursor: pointer;
`;

export const SectionInfo = styled.p`
  text-align: center;
  border-bottom: 2px solid #cecece;
`;

export const FilterButton = styled.div`
  color: #000;
  background-color: ${({ selected }) => (selected ? "#7cba01" : "#C4E19A")};
  padding: 5px 15px;
  border-radius: 5px;
`;

export const LaunchInfoSection = styled.div`
  box-sizing: border-box;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 30px 30px 30px;
  flex: 1;
`;

export const CardsContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  display: grid;
  justify-content: space-evenly;
  grid-gap: 20px;
  @media screen and (max-width: ${breakpoints.SM}) {
    grid-template-columns: repeat(1, minmax(250px, 250px));
  }
  @media (min-width: ${breakpoints.SM}) {
    grid-template-columns: repeat(2, minmax(150px, 250px));
  }
  @media screen and (min-width: ${breakpoints.LG}) {
    grid-template-columns: repeat(4, minmax(250px, 250px));
  }
`;

export const EventCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 10px;
`;

export const EventLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
`;

export const EventImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  display: block;
`;

export const EventDetails = styled.div`
  padding: 10px;
`;

export const Name = styled.p`
  color: #3e478b;
`;

export const MachineIds = styled.div``;

export const DetailWrapper = styled.div`
  margin: 10px 0;
`;

export const DetailKey = styled.span`
  font-type: bold;
  flex: 1;
  font-weight: 600;
`;

export const DetailValue = styled.span``;

export const Footer = styled.div`
  padding: 20px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  > span {
    font-size: 20px;
  }
`;
