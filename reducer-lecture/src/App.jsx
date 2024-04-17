import { createContext, useReducer } from "react";
import "./App.css";
import Counter from "./Counter";
import ColorSetter from "./ColorSetter";
import TodoList from "./TodoList";
import GrandParent from "./components/GrandParent";

export const userContext = createContext();
const App = () => {
  const [user, setUser] = useState({
    firstName: "Hannah",
    lastName: "Høilo",
    role: "user",
  });

  return (
    <>
      <Counter></Counter>
      <ColorSetter></ColorSetter>
      <TodoList></TodoList>

      <div>
        <h2>{user.firstName}</h2>
        <userContext.Provider value={{ user: user, setUser: setUser }}>
          <GrandParent/>
        </userContext.Provider>
        <p>
          karriereveileder: hege børke lillekroken
          hegeborke.lillekroken@kristiania.no 
          ikigai = iki - liv . gai = resultat. din grunn til å leve

          det du elsker - pasjon, det du er god til, profesjon - de du kan få betalt for - kall - det verden trenger - misjon
          
          hva er du god i?
          hva elsker du?
          hva har du som verden trenger?
          hva kan du få betalt for? 

          hvem er heg
          hva kan jeg 
          hvor vil jeg 

          linkedin
          gjøre deg søkbar - knytte kontakter bygge nettverk
          være aktiv

        </p>
      </div>
    </>
  );
};

export default App;
