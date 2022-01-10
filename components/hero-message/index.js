import styles from './index.module.css'

export default function HeroMessage({ progress }) {
  return (
    <div className="flex flex-col justify-center space-y-3">
      <h className={`text-5xl text-white uppercase tracking-wider	`}>
        A <span className="text-blue tracking-wider	">mobile first</span>
      </h>
      <h className={`text-5xl text-white uppercase tracking-wider`}>
        Play-to-earn strategy game
      </h>
      <p className="text-xl text-white tracking-wider font-thin">
        Join in to lead the descendants of humanity and forge a new empire!
      </p>
    </div>
  )
}
