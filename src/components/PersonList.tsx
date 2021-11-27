import { Name } from './Person.types'

type PersonListProps = {
    list: Name[]
}

export const PersonList = (props: PersonListProps) => {
    return ( 
        <div>
            {props.list.map(name => {
                return (
                    <h2 key={name.first}> {name.first} {name.last}</h2>
                )
            })}
        </div>
    )

}