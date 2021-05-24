
const Article = (props) => {
    return(
        <div>
            <img src={"/logo192.png"} widh={36} height={36} />
            <p>{props.tittle}</p>
            <p>{props.content}</p>
        </div>
    )
}

export default Article