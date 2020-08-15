import React, { useEffect, useState } from "react";
import "./App.css";
import {
  AppContainer,
  Header,
  ViewSection,
  LaunchInfoSection,
  CardsContainer,
  SideBar,
  LoaderAligner,
  DetailKey,
  Footer,
} from "./styles";
import Card from "./components/card";
import Axios from "axios";
import Filters from "./components/filters";
import Loader from "./assets/loader";

const baseUrl = `https://api.spaceXdata.com/v3/launches?limit=100`;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [programeData, setProgramData] = useState([]);
  const [selectedYear, setYearFilter] = useState(null);
  const [launchStatus, setLaunchFilter] = useState(null);
  const [landStatus, setLandFilter] = useState(null);

  const handleStatusFilter = (type, status) => {
    if (type === "launch") {
      setLaunchFilter(status);
      return;
    }
    setLandFilter(status);
  };

  const handleYearFilter = (e) => {
    e.stopPropagation();
    const year = e.target.dataset.year;
    setYearFilter(year);
  };

  useEffect(() => {
    const updateData = async (filters) => {
      setIsLoading(true);
      const { data } = await Axios.get(baseUrl, {
        params: {
          launch_year: selectedYear,
          launch_success: launchStatus,
          land_success: landStatus,
          ...filters,
        },
      });
      setIsLoading(false);
      setProgramData(data);
    };
    updateData();
  }, [selectedYear, landStatus, launchStatus]);

  return (
    <AppContainer>
      <Header>SpaceX Launch Programs</Header>
      <ViewSection>
        <SideBar>
          <Filters
            handleYearFilter={handleYearFilter}
            selectedYear={selectedYear}
            handleStatusFilter={handleStatusFilter}
            launchStatus={launchStatus}
            landStatus={landStatus}
          />
        </SideBar>
        <LaunchInfoSection>
          {isLoading ? (
            <LoaderAligner>
              <Loader />
            </LoaderAligner>
          ) : (
            <CardsContainer>
              {programeData.length < 1
                ? "No Data found"
                : programeData.map((event, i) => (
                    <Card
                      event={event}
                      key={`event-${i}`}
                      landStatus={landStatus}
                    />
                  ))}
            </CardsContainer>
          )}
        </LaunchInfoSection>
      </ViewSection>
      <Footer>
        {" "}
        <DetailKey>Developed By :</DetailKey> Sandeep Kumar{" "}
      </Footer>
    </AppContainer>
  );
}

export default App;
