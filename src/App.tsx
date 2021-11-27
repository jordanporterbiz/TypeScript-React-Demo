import './App.css';
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'



function App() {


  const personName = {
    first: 'Jordan',
    last: 'Porter'
  }

  const nameList = [
    { 
      first: 'Craig',
      last: 'Porter'
    },
    { 
      first: 'Donna',
      last: 'Porter'
    },
    { 
      first: 'Lex',
      last: 'Porter'
    },
    { 
      first: 'Marie',
      last: 'Porter'
    },
  ]

  return (
    <div className="App">
      <Greet name='Jordan' levelCount={200}/> 
      <Person name={personName}/>
      <PersonList list={nameList}/>
    </div>
  );
}

export default App;
