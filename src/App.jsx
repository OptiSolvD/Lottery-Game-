import './App.css'
// import { Ticket } from './Ticket.jsx'
import Ticket from './Ticket.jsx'
import Lottery from './Lottery.jsx'

function App() {
  let winCondition=(ticket)=>{
    return ticket.every((num)=>num===ticket[0]); // all numbers are the same
    }
  
  return (
    <>
    <h1>Lottery Game</h1>
    <Lottery n={3} winCondition={winCondition} />
    </>
  );
  
}

export default App
