import SwipeableItem from "./SwipeableItem";
import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

const SwipeableList = () => {
    const data = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 7',
        'Item 8',
        'Item 9',
        'Item 10',
      ];
    const [items, setItems] = useState(data);
  
    const handleSwipe = (direction) => {
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
      <div onSwipe={(event, info) => handleSwipe(info.direction)}>
        {items.map((item, index) => (
          <SwipeableItem key={index} data={item} />
        ))}
      </div>
    );
  }

  export default SwipeableList;