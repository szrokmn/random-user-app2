import './App.css';
import appStyle from "./App.module.scss"
import cw from "./App.module.scss"
import design from "./assets/design.svg"
import Card from "./components/Card"
function App() {
  return (
   <div className={appStyle.app}>
     <div className={appStyle.container}>
      <nav className={appStyle.navbar}>
        <img className={appStyle.cwImage} src={cw} alt="claruswayImage" />
      </nav>     
    </div>
    <Card/>
    <div>
      <div className={appStyle.footer}>
        <p className=>&copy;meScriptaManent</p>
      <img className={appStyle.design} src={design} alt="designImage" />
      </div>
      
    </div>
   </div>
  );
}

export default App;
