import {
  PageSectionsList,
  SocialMediaIcons,
} from '../'
import styles from './index.module.css'

export default function Menu({ toggleMenuOpen, isMenuOpen }) {
  return (
    <div
      className={`z-50 font-patron uppercase absolute right-0 top-0 bottom-0 w-fit shadow-lg transition duration-1000	ease-linear ${
        !isMenuOpen ? 'translate-x-full' : 'translate-x-0'
      }`}
    >
      <img
        src="images/menu-slide.svg"
        className="object-contain h-full flex md:hidden lg:flex"
      />

      <img
        src="images/menu-slide-landscape-mobile.svg"
        className="object-contain h-full hidden md:flex lg:hidden"
      />

      <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-between items-end p-3">
        <div className="flex justify-between w-full">
          {/* Connect */}
          <div className="flex items-center cursor-pointer">
            <img src="icons/connect-icon.svg" alt="Profile image" width={50} />
            <p className="text-gold text-xs">CONNECT</p>
          </div>

          <button
            onClick={() => {
              toggleMenuOpen(false)
            }}
            className="text-white text-xs hover:text-blue"
          >
            Close X
          </button>
        </div>

        <div className="">
          <PageSectionsList />
        </div>

        <div className="flex flex-col uppercase text-right">
          <p className="text-gold text-xs">Get involved</p>

          <p className="text-white text-md">Ut enim ad</p>

          <p className="text-white lowercase pt-4 text-xs flex md:hidden lg:flex font-sans font-thin">
            Our community is growing. Join us on social media today to stay up
            to date.
          </p>

          <div className="pb-12 pt-4 pl-8 flex md:hidden lg:flex">
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </div>
  )
}
