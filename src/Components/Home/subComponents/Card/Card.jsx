import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import styles from './Card.modules.css';

const Card = ({images}) => {
    const [index, set] = useState(0)
    const transitions = useTransition(images[index], item => item.id, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: config.molasses,
    })

    return transitions.map(({ item, props, key }) => (
      <animated.div
        onClick={() => {
          console.log(index)
          set((index + 1) % 5)}}
        key={key}
        className={styles.bg}
        style={{ ...props, backgroundImage: `url(${item.url.url})` }}
      />
    ))
}


export default Card;