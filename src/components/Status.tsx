type StatusProps = { 
    status : `loading` | 'success' | 'error' 
}

export const Status = (props: StatusProps) => {
    let message = ''
    switch(props.status) {
        case 'loading':  message = 'Loading...'
        break;
        case 'success':  message = 'Data Fetched Successfully!'
        break;
        case 'error':  message = 'Error Fetching Data'
        break;
        default:
             message = 'Loading...'
    }


    return (
        <div>
           <h2>Status - {message}</h2>
        </div>
    )
}