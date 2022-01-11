import 'tailwindcss/tailwind.css'

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

import Head from 'next/head'

import {
  HeroMessage,
  MenuButton,
  MenuSlider,
  NavBarLogo,
  PageSectionsList,
  SocialMediaIcons,
} from '../components'
import styles from './index.module.css'

export default function Home() {
  const logo = useRef(null)
  const menu = useRef(null)
  const pageSectionsList = useRef(null)
  const footer = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  let ScrollReveal

  useEffect(() => {
    async function activateScrollRevealAnimation() {
      ScrollReveal = (await import('scrollreveal')).default

      ScrollReveal().reveal(logo.current, {
        delay: 1900,
        distance: '80%',
        origin: 'top',
        easing: 'ease-in-out',
      })

      ScrollReveal().reveal(menu.current, {
        delay: 2200,
        distance: '80%',
        origin: 'top',
        easing: 'ease-in-out',
      })

      ScrollReveal().reveal(pageSectionsList.current, {
        delay: 2800,
        distance: '80%',
        origin: 'right',
        opacity: 0,
        easing: 'ease-in-out',
      })

      ScrollReveal().reveal(footer.current, {
        delay: 2800,
        distance: '80%',
        origin: 'bottom',
        opacity: 0,
        easing: 'ease-in-out',
      })
    }

    activateScrollRevealAnimation()
  }, [])

  function toggleMenuOpen() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div
      className={`w-screen h-screen overflow-hidden	relative ${styles['home-background-image']} `}
    >
      <Head>
        <title>Home - Galaxy Blitz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="z-40 fixed w-full">
        <div className="flex flex-row justify-between items-center pl-0 pr-5 pt-5 lg:pt-10 lg:pl-3 lg:pr-8">
          <div className="cursor-pointer" ref={logo}>
            <NavBarLogo />
          </div>
          <div className="cursor-pointer" ref={menu}>
            <MenuButton onClick={toggleMenuOpen} />
          </div>
        </div>
      </div>

      <div className="z-30 h-full flex flex-row justify-between item-center pl-5 pr-5 lg:pr-8">
        <div className="w-fit flex item-center ">
          <HeroMessage />
        </div>

        <div
          ref={pageSectionsList}
          className="hidden lg:flex h-full flex item-center "
        >
          <PageSectionsList isMenuOpen={isMenuOpen} />
        </div>
      </div>

      <footer
        ref={footer}
        className="absolute bottom-0 w-full flex flex-row justify-center lg:justify-between item-center pl-5 pr-5 lg:pr-8 h-24"
      >
        <div className="hidden lg:flex">
          <img src={'images/left-dashed-corner.svg'} width={300} />
        </div>

        <div className=" flex flex-col justify-center items-center space-y-2">
          <div className="py-5 px-2 rounded-full bottom-10 border-2 cursor-pointer">
            <div className="-my-3 py-1.5 px-0.5 rounded-full bg-white animate-bounce"></div>
          </div>

          <div>
            <p className="text-white font-thin text-xs lg:text-sm uppercase font-patron">
              Start the experience
            </p>
          </div>
        </div>

        <div className="relative hidden lg:flex">
          <img src={'images/right-dashed-corner.svg'} width={300} />
          <div className="absolute right-5 bottom-8 flex justify-between w-48">
            <SocialMediaIcons />
          </div>
        </div>
      </footer>

      <MenuSlider toggleMenuOpen={toggleMenuOpen} isMenuOpen={isMenuOpen} />
    </div>
  )
}
