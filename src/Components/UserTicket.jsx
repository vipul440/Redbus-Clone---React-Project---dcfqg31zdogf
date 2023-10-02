import React from 'react'
import { useState ,createContext,useContext} from 'react'

const TicketContext=createContext();
const TicketChangeContext=createContext();

export const useTicket=()=>useContext(TicketContext);
export const useChangeTicket=()=>useContext(TicketChangeContext);


    

function UserTicket({children}) {
    const [tickets,setTickets]=useState([]);
    const bookTicket=(ticketDetails)=>{
        setTickets(prevTickets=>[...prevTickets,{...ticketDetails}]);

    }
    const cancelTicket=(busId)=>{
        const updatedTickets=tickets.filter(ticket=>ticket.id!=busId)
        setTickets(prevTickets=>updatedTickets);
    }
    const changeTicket = { bookTicket, cancelTicket };
    console.log(tickets);
  return (
    <TicketContext.Provider value={tickets}>
      <TicketChangeContext.Provider
        value={changeTicket}>
     {children}
  </TicketChangeContext.Provider>

    </TicketContext.Provider>
  );
}

export default UserTicket