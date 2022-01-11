import styles from './index.module.css'

export default function NavBarLogo({ progress }) {
  return (
    <div className="flex justify-between w-full">
      <img
        src={'icons/discord.svg'}
        width={20}
        className="transition duration-0 hover:duration-150 hover:scale-125 cursor-pointer"
      />
      <img
        src={'icons/telegram.svg'}
        width={20}
        className="transition duration-0 hover:duration-150 hover:scale-125 cursor-pointer"
      />
      <img
        src={'icons/youtube.svg'}
        width={20}
        className="transition duration-0 hover:duration-150 hover:scale-125 cursor-pointer"
      />
      <img
        src={'icons/medium.svg'}
        width={20}
        className="transition duration-0 hover:duration-150 hover:scale-125 cursor-pointer"
      />
      <img
        src={'icons/twitter.svg'}
        width={20}
        className="transition duration-0 hover:duration-150 hover:scale-125 cursor-pointer"
      />
    </div>
  )
}
