import Title from "../components/Heading";
import List from "../components/ListItems";
function App() {
  var languages = ["RUST", "Python", "JavaScript", "Java", "Swift"];
  var heading = "Most Popular languages in 2025.";
  return <>
    <Title title={heading}></Title>
    <List langs={languages}></List>
  </>
}
export default App;