import Content from "./components/Content"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <div className="appContainer">
      <Header />
      <Content />
      <Sidebar />
    </div>
  )
}

export default App