import './App.css';
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Container } from './components/Container'
import { Counter } from './components/state/Counter'
import { Box } from './components/context/Box'
import { ThemeContextProvider } from './components/context/ThemeContext'
import { User } from './components/context/User'
import { UserContextProvider } from './components/context/UserContext'

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
      <br/>
      <br/>
      <Greet name='Jordan' isLoggedIn={true} levelCount={200}/>
      <br/>
      <br/>
      <Person name={personName}/>
      <br/>
      <br/>
      <PersonList list={nameList}/>
      <br/>
      <br/>
      <Status status='success'/>
      <br/>
      <br/>
      <Oscar>
        <Heading>Oscar goes to PORTER!!! :D :D </Heading>
      </Oscar>
      <br/>
      <br/>
      <Button handleClick={(event, id) => {
        console.log('Button has been clicked!!', event, id)
      }}/>
      <br/>
      <br/>
      <Input value='' handleChange={event => console.log(event)}/>
      <br/>
      <br/>
      <Container styles={{ border: '1px solid black', padding: '1rem'}} />
      <br/>
      <br/>
      <Counter/>
      <br/>
      <br/>
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      {/* With Future Context values */}
      <UserContextProvider>
        <User/>
      </UserContextProvider>


    </div>
  );
}

export default App;
