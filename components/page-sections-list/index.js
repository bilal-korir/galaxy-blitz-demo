import styles from './index.module.css'

export default function NavBarLogo({ progress }) {
  return (
    <div className="flex items-center text-white text-right	text-lg font-light uppercase">
      <div className="space-y-3">
        <div className="flex justify-end items-center space-x-3 transition duration-0 hover:duration-150 hover:scale-125 cursor-pointer">
          <p className="mb-0 text-blue">Gameplay</p>
          <div className="px-10 h-0.5 rounded-full bg-blue "></div>
        </div>

        <div className="flex justify-end items-center space-x-3 transition duration-0 hover:duration-150 hover:scale-125 cursor-pointer">
          <p className="mb-0">Showroom</p>
          <div className="px-3 h-0.5 rounded-full bg-white "></div>
        </div>

        <div className="flex justify-end items-center space-x-3 transition duration-0 hover:duration-150 hover:scale-125 cursor-pointer">
          <p className="mb-0">Investor wall</p>
          <div className="px-3 h-0.5 rounded-full bg-white "></div>
        </div>

        <div className="flex justify-end items-center space-x-3 transition duration-0 hover:duration-150 hover:scale-125 cursor-pointer">
          <p className="mb-0">Marketplace</p>
          <div className="px-3 h-0.5 rounded-full bg-white "></div>
        </div>

        <div className="flex justify-end items-center space-x-3 transition duration-0 hover:duration-150 hover:scale-125 cursor-pointer">
          <p className="mb-0">Mint page</p>
          <div className="px-3 h-0.5 rounded-full bg-white "></div>
        </div>

        <div className="flex justify-end items-center space-x-3 transition duration-0 hover:duration-150 hover:scale-125 cursor-pointer">
          <p className="mb-0">News</p>
          <div className="px-3 h-0.5 rounded-full bg-white "></div>
        </div>

        <div className="flex justify-end items-center space-x-3 transition duration-0 hover:duration-150 hover:scale-125 cursor-pointer">
          <p className="mb-0">Team</p>
          <div className="px-3 h-0.5 rounded-full bg-white "></div>
        </div>
      </div>
    </div>
  )
}
