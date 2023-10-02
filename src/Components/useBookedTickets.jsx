import { useState } from "react";

export function useBookedTickets() {
  const [bookedTickets, setBookedTickets] = useState([]);
  console.log(bookedTickets);
  console.log(removeBookedTicket);

  const addBookedTicket = (ticket) => {
    setBookedTickets((prevTickets) => [...prevTickets, ticket]);
  };

  const removeBookedTicket = (index) => {
    setBookedTickets((prevTickets) =>
      prevTickets.filter((_, i) => i !== index)
    );
  };

  const clearBookedTickets = () => {
    setBookedTickets([]);
  };

  return {
    bookedTickets,
    addBookedTicket,
    removeBookedTicket,
    clearBookedTickets,
  };
}
