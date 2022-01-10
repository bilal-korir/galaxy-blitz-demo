import styles from './index.module.css'

export default function Menu() {
  return (
    <div className="flex items-center cursor-pointer">
      <p className="hidden md:inline-block text-xl text-white uppercase mr-4 font-patron cursor-pointer">
        Menu
      </p>
      <img src="icons/menu-icon.svg" />
    </div>
  )
}
