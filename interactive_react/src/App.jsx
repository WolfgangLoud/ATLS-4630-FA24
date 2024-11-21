import "./App.css";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";

const data =[
  {
    category: 'mammal',
    name: 'Cat',
  },
  {
    category: 'mammal',
    name:'Dog'
  },
  {
    category: 'mammal',
    name:'Monkey'
  },
  {
    category: 'reptile',
    name: 'Snake',
  },
  {
    category: 'reptile',
    name: 'Lizzard',
  },
  {
    category: 'reptile',
    name: 'Turtle',
  }
]


export default function App() {
  
  const mammals = data.filter(item => item.category === 'mammal');
  const reptiles = data.filter(item => item.category === 'reptile');

  return (
    <div className="App">
      <h1 className="title">My Awesome Drop Downs</h1>
      <div className="content">
        <Dropdown 
          buttonText="Mammals" 
          content={
            <>
              {mammals.map((mammal) => (
                <DropdownItem key={mammal.name} item={mammal.name} />
              ))}
            </>
          }
        />
        <Dropdown 
          buttonText="Reptiles" 
          content={
            <>
              {reptiles.map((reptile) => (
                <DropdownItem key={reptile.name} item={reptile.name} />
              ))}
            </>
          }
        />
      </div>
    </div>
  )
}