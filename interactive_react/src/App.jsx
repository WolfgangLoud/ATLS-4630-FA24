import "./App.css";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";

export default function App() {
  
  const items = ["cat", "dog", "meow", "woof", "bark"];

  return (
    <div className="App">
      <div className="content">
        <Dropdown 
          buttonText="Dropdown button" 
          content={
            <>
              {items.map((item) => (
                <DropdownItem key={item} item={item}/>
              ))}
            </>
          }
        />
      </div>
    </div>
  );
}