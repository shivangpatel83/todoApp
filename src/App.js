import './App.css';
import {Provider} from "react-redux";
import {Store} from "./components/redux/Store";
import { TodoContainer} from "./components/TodoContainer";

function App() {
  return (
      <>
        <Provider store={Store}>
          <TodoContainer/>
        </Provider>
       </>
  );
}

export default App;
