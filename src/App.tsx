import "./App.css";
import AppButton from "./AppButton";
import { AppFab } from "./AppFab";

function App() {
  return (
    <div>
      <AppButton />
      <div className="right-bottom">
        <AppFab />
      </div>
    </div>
  );
}

export default App;
