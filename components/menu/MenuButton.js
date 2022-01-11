import styles from './index.module.css'

export default function Menu({ onClick }) {
  return (
    <div
      className="flex items-center"
      onClick={() => {
        onClick()
        console.log('Menu button clicked')
      }}
    >
      <p className="hidden md:flex text-xl text-white uppercase mr-4 font-patron">
        Menu
      </p>
      <img src="icons/menu-icon.svg" />
    </div>
  )
}
