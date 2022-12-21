import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

const SwipeableItem = (props) => {
    const { data } = props;
    const [animation, setAnimation] = useSpring(() => ({
      transform: 'translate3d(0,0,0)',
    }));
  
    return (
      <animated.div style={animation}>
        {data}
      </animated.div>
    );
  }
  
  export default SwipeableItem;