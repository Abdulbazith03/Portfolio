import './pclss.css'
function Course(props){
    return(
        <div className="card">
            <img src="" alt="" />
            <h1>{props.name}</h1>
            <p>{props.rating}</p>
            <p>{props.price}</p>
        </div>
    );
}
Course.defaultProps = {
    name:"vanakam",
    price:"99"
}
export default Course;