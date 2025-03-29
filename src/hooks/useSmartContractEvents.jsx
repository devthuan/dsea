import { useEffect, useState } from "react";
import useWeb3 from "./useWeb3";
const useSmartContractEvents = (eventName) => {
  const { contract } = useWeb3();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (contract) {
          // if (contract.events[eventName]().on === "function") {
          const eventListener = await contract.events[eventName]()
            .on("data", (event) => {
              // console.log("New Event:", event);
              //   delete __length__

              setEvents((prevEvents) => [...prevEvents, event]);
            })
            .on("error", (error) => {
              console.error("Event Error:", error);
            });

          return () => {
            eventListener.unsubscribe();
          };
          // }
        } else {
          console.log("No event available at the moment.");
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [contract, eventName]);

  return events;
};

export default useSmartContractEvents;
