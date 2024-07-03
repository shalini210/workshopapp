import "./user.css";
export default function User(props)
{
    console.log(props);
    return(
        <div className="userbox">
            <img src={props.ipath}></img>
            <h2>{props.uname}</h2>
            <p>{props.ud}</p>
            <p>{props.uc}</p>
        </div>
    )
}