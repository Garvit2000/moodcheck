const Emotions = props =>{
if(props.currentmood === 1){
    return(
        props.emotion1.map((items,i) => <span key = {i} className="item-list" id={"id"+i}>{items}</span>)
    )
}
if(props.currentmood === 2){
    return(
        props.emotion2.map((items,i) => <span key = {i} className="item-list" id={"id"+i}>{items}</span>)
    )
}
if(props.currentmood === 3){
    return(
        props.emotion3.map((items,i) => <span key = {i} className="item-list" id={"id"+i}>{items}</span>)
    )
}
if(props.currentmood === 4){
    return(
        props.emotion4.map((items,i) => <span key = {i} className="item-list" id={"id"+i}>{items}</span>)
    )
}
}

export default Emotions