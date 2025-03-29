import React from "react";
import useSmartContractEvents from "../../hooks/useSmartContractEvents";

const SmartContractEventsComponent = () => {
  const events = useSmartContractEvents("FlowTotalRecorded");

  console.log(events);
  // const cleanData = cleanEventDataFormSMC(events);

  // console.log(cleanData);

  return (
    <div>
      <h2>Smart Contract Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.name} + {event.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SmartContractEventsComponent;
