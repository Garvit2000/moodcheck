import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

function SwappableContainer(props) {
  const { onSwipe } = props;
  const [animation, setAnimation] = useSpring(() => ({
    transform: 'translate3d(0,0,0)',
  }));

  function handleSwipe(direction) {
    // Animate the container's movement
    setAnimation({
      transform: direction === 'left' ? 'translate3d(-100%,0,0)' : 'translate3d(100%,0,0)',
    });

    // Call the onSwipe callback with the swipe direction
    onSwipe(direction);
  }

  return (
    <animated.div
      onSwipe={(event, info) => handleSwipe(info.direction)}
      style={animation}
    >
      {/* Render the contents of the container here */}
    </animated.div>
  );
}

function List(props) {
  const { data } = props;
  const [items, setItems] = useState(data);

  function handleSwipe(direction) {
    if (direction === 'left') {
      // Rearrange the list of items to move the first item to the end
      const newItems = [...items.slice(1), items[0]];
      setItems(newItems);
    } else if (direction === 'right') {
      // Rearrange the list of items to move the last item to the beginning
      const newItems = [items[items.length - 1], ...items.slice(0, -1)];
      setItems(newItems);
    }
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  const data = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <SwappableContainer onSwipe={handleSwipe} />
      <List data={data} />
    </div>
  );
}
