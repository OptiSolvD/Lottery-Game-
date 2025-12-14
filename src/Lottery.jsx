import {useState} from 'react';

import {getTicket,sumArray} from './helper.js';
import Ticket from './Ticket.jsx';
import './Lottery.css';
import Button from './Button.jsx';
import './Button.css';
import myImage from './assets/Photo.png'; // Image successfully imported

export default function Lottery({n,winCondition}){
    let [ticket,setTicket]= useState(getTicket(n));
    // let total= sumArray(ticket);
    let buyTicket=()=> setTicket(getTicket(n));
    let isWinner= winCondition(ticket);
    
    return(
        <>
        <Ticket ticket={ticket} />
        <div className="lottery-controls">
            <button className="app-button" onClick={buyTicket}>Buy A New Ticket</button>
        </div>
        
        <h2 className={`lottery-result ${isWinner ? 'win':'lose'}`}>
            {isWinner ? 
                // Image is embedded only when isWinner is true
                <>
                    {"You won Rs 150 😂"} 
                    <img src={myImage} alt="Winning Trophy" style={{ height: '30px', marginLeft: '10px' }} />
                </>
                : 
                "Try Again!"
            }
        </h2>
        </>
    );
};