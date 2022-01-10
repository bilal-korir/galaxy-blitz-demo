import styles from './index.module.css'

export default function NavBarLogo({ progress }) {
  return (
    <div className="flex items-center">
      <img src="images/logo.svg" width={85} />

      <p className={`text-2xl text-white uppercase ${styles['shadow']}`}>
        Galaxy <span className="text-blue">Blitz</span>
      </p>
    </div>
  )
}
