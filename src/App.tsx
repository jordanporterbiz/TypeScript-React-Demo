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
import { List } from './components/generics/List'
import { RandomNumber } from './components/restriction/RandomNumber'


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

      {/* When you have a component that you would like to re-use,
       it's best to use generic types to handle multiple data inputs 
       */}
      <List 
        items={['Batman', 'Superman', 'Spiderman', 'Black Panther', 'Thor', 'Hulk']}
        onClick={(item) => console.log(item)} />

      <List 
        items={[0, 1, 2, 3, 4, 5]}
        onClick={(item) => console.log(item)} />

      <List 
        items={[{
          first: 'Bruce',
          last: 'Wayne',
        },
        {
          first: 'Clark',
          last: 'Kent',
        },
        {
          first: 'Peter',
          last: 'Parker',
        },
        {
          first: 'King',
          last: 'T\'Challa',
        },
        {
          first: 'Thor',
          last: 'Odinson',
        },
        {
          first: 'Bruce',
          last: 'Banner',
        },
      ]}
        onClick={(item) => console.log(item)} />
      <br/>
      <br/>
      <RandomNumber value={10} isPositive/>


    </div>
  );
}

export default App;
