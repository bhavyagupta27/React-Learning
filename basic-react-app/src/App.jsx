import "./App.css";
//import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";

function App() {
  return (
    <>
    <MsgBox userName="shradha" textColor="yellow"/>
    <MsgBox userName="bhavya" textColor="grey"/>
    <ProductTab/>
    </>
  );
}

export default App;