const Emotions = (props) => {
  console.log("Emotion: ", `emotion${props.currentmood}`);
  return (
    <div className="content container justify-content-end">
      {props[`emotion${props.currentmood}`].map((items, i) => (
        <span key={i} className="item-list" id={"id" + i}>
          {items}
        </span>
      ))}
    </div>
  );
};

export default Emotions;
