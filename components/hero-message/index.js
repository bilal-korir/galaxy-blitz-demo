import styles from './index.module.css'

export default function HeroMessage({ progress }) {
  return (
    <div className="flex flex-col justify-center space-y-3 relative">
      <h className={`text-5xl text-white uppercase tracking-wider	`}>
        A <span className="text-blue tracking-wider	">mobile first</span>
      </h>
      <h className={`text-5xl text-white uppercase tracking-wider`}>
        Play-to-earn strategy game
      </h>
      <p className="text-xl text-white tracking-wider font-thin">
        Join in to lead the descendants of humanity and forge a new empire!
      </p>
      <div className="transition scale-0  duration-1000 ease-in-out	 absolute h-full w-full bg-amber-900"></div>
    </div>
  )
}
