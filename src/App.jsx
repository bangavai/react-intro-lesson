
import Button from "./components/Button";
import "./App.css";


function App() {

  const onBlurEvent = (e) => { console.log(e); }
  
  
    return (
      <div className="container">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="avatar"
          className="avatar"
        />
        <h1>Welcome to react!</h1>
        <Button text="first button" />
        <Button text="second button" />
        <input onBlur={onBlurEvent} />
      </div>
    );
  }
  
  export default App;
