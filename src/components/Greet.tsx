type GreetProps = {
    name: string
    levelCount: number
}


export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>Welcome {props.name}, it's time to level up to {props.levelCount}!</h2>
        </div>
    )
}
