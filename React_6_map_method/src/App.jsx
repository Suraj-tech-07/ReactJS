function App() {
  let subjects = ["Descrete Mathematics", "Problem Solving Using C", "Principles of Management and Communication", "Fundamental of Computer Science and Emerging Technologies", "Computer Organization and Architecture"];
  // let subjects = [];
  // if (subjects.length === 0) {
  //   return <>
  //     <h2>
  //       Nothing in the list
  //     </h2>
  //   </>
  // }

  return <>
    <h1>Subjcts : </h1>
    {subjects.length === 0 ? <h3>No Items Available</h3> : null}
    <ul className="list-group">
      {
        subjects.map((items) => (
          <li className="list-group-item" key={items}> {items}</li>
        ))
      }
    </ul>
  </>
}

export default App;