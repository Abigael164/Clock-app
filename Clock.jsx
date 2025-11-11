import {useState, useEffect} from "react"
import './Clock.css'

const Clock = () => {
    const[time,setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval( () => {
            setTime(new Date());
        },1000);
        return () => clearInterval(timer)
    },[]);

    const formattedTime = time.toLocaleTimeString('en-US',
        {hour12:false}
    );//convert data to human-readable time and 24 hour format
    const formattedDate = time.toLocaleDateString();

    return(
        <div className="container">
            <div className="mytime">Time:{formattedTime}</div>
            <div className="mydate">Date:{formattedDate}</div>
        </div>
    )


}
export default Clock;
