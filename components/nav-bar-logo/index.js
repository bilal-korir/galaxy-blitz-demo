import styles from './index.module.css'

export default function NavBarLogo({ progress }) {
  return (
    <div className="flex items-center font-patron text-xl md:text-xl uppercase">
      <img src="images/logo.svg" width={70} />

      <p className={`text-white  ${styles['shadow']}`}>
        Galaxy <span className="text-blue">Blitz</span>
      </p>
    </div>
  )
}
