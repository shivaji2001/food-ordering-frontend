export default function Error({title,message}){
    console.log('In error component data received is ',title, message)
    return (
        <div className="error">
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    )
}