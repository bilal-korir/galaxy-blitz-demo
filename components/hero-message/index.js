import {
  useLayoutEffect,
  useState,
} from 'react'

import styles from './index.module.css'

export default function HeroMessage({ progress }) {
  const [lineThree, setLineThree] = useState(null)

  useLayoutEffect(() => {
    setTimeout(() => {
      setLineThree('wipe-effect')
    }, 2800)
  }, [])

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col space-y-3 relative">
        <h
          className={`${styles['wipe-effect']} text-5xl text-white uppercase font-patron`}
        >
          A <span className="text-blue	font-patron">mobile first</span>
        </h>
        <h
          className={`${styles['wipe-effect']} text-4xl text-white uppercase font-patron`}
        >
          Play-to-earn strategy game
        </h>

        <p
          className={`${lineThree ? 'visible' : 'invisible'} ${
            styles[lineThree]
          } text-2xl text-white tracking-wid font-thin`}
        >
          Join in to lead the descendants of humanity and forge a new empire!
        </p>
      </div>
    </div>
  )
}
