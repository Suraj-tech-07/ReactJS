import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/footer.jsx';
import SideBar from './components/Sidebar.jsx';
import Container from './components/Container.jsx';
import Form from './components/Form.jsx';
import PostList from './components/PostList.jsx';
import { useState } from 'react';

function App() {

  const [currentTab, setTab] = useState("Home");
  const setTabState = (currentState) => {
    setTab(currentState);
  }

  return <>
    <Container className="header_Container">
      <SideBar setTabState={setTabState} currentTab={currentTab}></SideBar>
      <Header></Header>
      <div style={{ position: "relative", left: "100px" }}>
        {
          currentTab === "Home" && <PostList ></PostList>
        }
        {
          currentTab === "CreatePost" &&
          <Form className="formContainer" style={{ position: "relative ", top: "200px" }}></Form>
        }
      </div>
    </Container >
    <Footer className="footerContainer" ></Footer>
  </>
}

export default App;
