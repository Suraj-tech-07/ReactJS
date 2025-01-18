import Title from "../components/Heading";
import List from "../components/ListItems";
function App() {
  var languages = ["RUST", "Python", "JavaScript", "Java", "Swift"];
  var popularityOutOf_10 = ["6", "8", "7", "7.5", "5"];
  var heading = "Most Popular languages in 2025.";
  return <>
    <Title title={heading}></Title>
    <List langs={languages} popularity={popularityOutOf_10}></List>
  </>
}
export default App;