import React from "react";
import {
  EventLogo,
  DetailWrapper,
  EventCard,
  EventImg,
  Name,
  MachineIds,
  DetailKey,
  EventDetails,
  DetailValue,
} from "../styles";

const Card = (props) => {
  const {
    flight_number,
    mission_name,
    mission_id,
    launch_success,
    launch_date_local,
    rocket: {
      first_stage: {
        //couldn't find the launch_landing key as shown in design
        cores: [{ land_success = "" }],
      },
    },
    links: { mission_patch_small },
  } = props.event;
  // if landing filter is selected defaulting the value to selected filter value as we couldn't found exact status key in data
  const { landStatus } = props;
  var year = new Date(launch_date_local).getFullYear();
  return (
    <EventCard>
      <EventLogo>
        <EventImg data-testid="logo" src={mission_patch_small} />
      </EventLogo>
      <EventDetails>
        <Name data-testid="name">
          {mission_name} #{flight_number}
        </Name>
        <MachineIds>
          <DetailKey>Mission Ids:</DetailKey>
          <ul>
            {mission_id.map((id) => (
              <li key={id}>{id}</li>
            ))}
          </ul>
        </MachineIds>
        <DetailWrapper>
          <DetailKey>Launch Year: </DetailKey>
          <DetailValue data-testid="year">{year}</DetailValue>
        </DetailWrapper>
        <DetailWrapper>
          <DetailKey>Successull Launch: </DetailKey>
          <DetailValue>{String(launch_success)}</DetailValue>
        </DetailWrapper>
        <DetailWrapper>
          <DetailKey>Successfull Landing:</DetailKey>
          <DetailValue>
            {typeof landStatus === "boolean"
              ? String(landStatus)
              : land_success}
          </DetailValue>
        </DetailWrapper>
      </EventDetails>
    </EventCard>
  );
};

export default Card;
