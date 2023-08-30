import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div>
      <div className='appContainer'>
        <Header />
        <Content />
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
