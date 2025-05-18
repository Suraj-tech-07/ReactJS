import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/footer";
import UserForm from "./components/UserForm";
import { useContext } from "react";
import Post from "./components/PostList";
import PostListProvider from "./store/postListStore";
import NoItem from "./components/NoItem";
import { useState } from "react";
const App = () => {
  const [currentTab, setTab] = useState("Home");
  const resetTab = (newTab) => {
    setTab(newTab);
  }
  return <PostListProvider>
    <Header></Header>
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <SideBar currentTab={currentTab} resetTab={resetTab} ></SideBar>
      {currentTab === "Home" ? <Post></Post> : <UserForm></UserForm>}
    </div >
    <Footer></Footer>
  </PostListProvider>
}
export default App;