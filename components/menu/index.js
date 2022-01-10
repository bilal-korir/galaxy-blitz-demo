import styles from './index.module.css'

export default function Menu() {
  return (
    <div className="flex items-center cursor-pointer">
      <p className="text-2xl text-white uppercase mr-5 font-patron cursor-pointer">
        Menu
      </p>
      <img src="icons/menu-icon.svg" />
    </div>
  )
}
