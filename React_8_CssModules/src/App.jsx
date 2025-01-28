import Title from "./components/Heading";
import ParentList from "./components/ListItems";
import "./App.css";
var App = () => {
  let title = "Chennai Super King Playing 11 IPL 2025."
  let players = ["Dhoni", "Ruturaj", "Jadeja", "Convey", "Dube", "Pathirana", "Ashwin", "Tripathi", "Noor", "Khaleel", "Curran"]
  return <>
    <Title title={title}></Title>
    <ParentList players={players}></ParentList>
  </>
}
export default App;