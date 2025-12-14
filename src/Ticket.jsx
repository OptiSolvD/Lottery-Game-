import './Ticket.css';
import TicketNum from "./TicketNum.jsx";
export  default function Ticket({ ticket }) {
    return(
        <div className="ticket">
            {ticket.map((num,idx) => (
                <TicketNum  num={num} key={`${num}-${idx}`} />
            ))}
            {/* <span   className="ticket-num">{ticket[0]}</span>
            <span   className="ticket-num">{ticket[1]}</span>
            <span   className="ticket-num">{ticket[2]}</span> */}
        </div>
    )
};
