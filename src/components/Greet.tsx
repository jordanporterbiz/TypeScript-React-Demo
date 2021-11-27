type GreetProps = {
    name: string
    levelCount?: number
    isLoggedIn: boolean
}


export const Greet = (props: GreetProps) => {
    // If needed, you can add optional props 
    //const { levelCount = 100 } = props
    
    return (
        <div>
            <h2>
            {props.isLoggedIn ? `Welcome ${props.name}, it's time to level up to ${props.levelCount}!` :
            'Welcome guest'}
            </h2>
        </div>
    )
}
