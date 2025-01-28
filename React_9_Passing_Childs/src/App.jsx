import Title from "./components/Title";
import Container from "./components/Container";
import ListItems from "./components/ListItems";
const App = () => {
  const heading = "This is the Heading";
  const footer = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque unde voluptatibus! Repudiandae praesentium iure facilis quos tempore accusamus pariatur.";
  const itemsName = ["First Items", "Second Item", "Third Item", "Fourth Item", "Fifth Item"];
  return <>
    <Container>
      <Title heading={heading}></Title>
    </Container>
    <Container>
      <ListItems itemsName={itemsName}></ListItems>
    </Container>
    <Container>
      <p>{footer}</p>
    </Container>
  </>
}
export default App;