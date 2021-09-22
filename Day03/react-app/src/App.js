import './App.css';
import 'antd/dist/antd.css';
import logo from "./assets/logo.svg"

function App() {
  return (
    <div className="App">
      <h1>
        <a href="https://ant.design/index-cn" id="logo">
          <img alt="logo" src={logo}/>
          Ant Design
        </a>
      </h1>
    </div>
  );
}

export default App;
