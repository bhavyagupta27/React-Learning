import './App.css';
import LudoBoard from "./LudoBoard.jsx";
import TodoList from "./TodoList.jsx";
import Lottery from "./Lottery.jsx";
import Ticket from "./Ticket.jsx";
import {sum} from "./helper";

function App() {

  let winCondition = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
  };

  return (
    <>
    <Lottery n={3} winningSum = {15} winCondition={winCondition}/>
    {/* <Ticket ticket= {Ticket[0 ,1 ,2]}/> */}
    {/* <Ticket ticket= {Ticket[1]}/> */}
    </>
  )
};

export default App;
