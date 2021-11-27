import './App.css';
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Button } from './components/Button'
import { Input } from './components/Input'


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
      <Greet name='Jordan' isLoggedIn={true} levelCount={200}/> 
      <Person name={personName}/>
      <PersonList list={nameList}/>
      <Status status='success'/>
      <Oscar>
        <Heading>Oscar goes to PORTER!!! :D :D </Heading>
      </Oscar>
      <Button handleClick={(event, id) => {
        console.log('Button has been clicked!!', event, id)
      }}/>
      <Input value='' handleChange={event => console.log(event)}/>
    </div>
  );
}

export default App;
