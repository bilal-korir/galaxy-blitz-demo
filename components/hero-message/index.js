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
    <div className="flex flex-col justify-end lg:justify-center pb-48 md:pb-24 lg:pb-0 text-center lg:text-left w-screen lg:w-full">
      <div className="flex flex-col space-y-3 relative">
        {/* Large screen view */}
        <h
          className={`hidden lg:block ${styles['wipe-effect']} text-2xl lg:text-5xl text-white uppercase font-patron`}
        >
          A <span className="text-blue	font-patron">mobile first</span>
        </h>
        <h
          className={`hidden lg:block ${styles['wipe-effect']} text-3xl text-white uppercase font-patron`}
        >
          Play-to-earn strategy game
        </h>

        <p
          className={`hidden lg:block ${lineThree ? 'visible' : 'invisible'} ${
            styles[lineThree]
          } text-lg text-white tracking-wid font-thin`}
        >
          Join in to lead the descendants of humanity and forge a new empire!
        </p>

        {/* Mobile screen view */}
        <h
          className={`block lg:hidden ${styles['wipe-effect']} text-2xl  lg:text-5xl text-white uppercase font-patron`}
        >
          A <span className="text-blue	font-patron">mobile first</span>
        </h>
        <h
          className={`block lg:hidden ${styles['wipe-effect']} text-2xl lg:text-5xl text-white uppercase font-patron`}
        >
          Play-to-earn
        </h>
        <h
          className={`block lg:hidden ${styles['wipe-effect']} text-2xl lg:text-5xl text-white uppercase font-patron`}
        >
          strategy game
        </h>
        <p
          className={`block lg:hidden ${lineThree ? 'visible' : 'invisible'} ${
            styles[lineThree]
          } text-md lg:text-2xl text-white tracking-wid font-thin`}
        >
          Join in to lead the descendants of humanity
        </p>
        <p
          className={`block lg:hidden ${lineThree ? 'visible' : 'invisible'} ${
            styles[lineThree]
          } text-md lg:text-2xl text-white tracking-wid font-thin`}
        >
          and forge a new empire!
        </p>
      </div>
    </div>
  )
}

{
  /* <h
className={`${styles['wipe-effect']} text-2xl lg:text-5xl text-white uppercase font-patron`}
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
</p> */
}
