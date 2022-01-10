import 'tailwindcss/tailwind.css'

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import ProgressBar from '@ramonak/react-progress-bar'

import HeroMessage from '../components/hero-message'
import Menu from '../components/menu'
import NavBarLogo from '../components/nav-bar-logo'
import PageSectionsList from '../components/page-sections-list'
import log from '../utility/log'
import styles from './index.module.css'

export default function Home() {
  const logo = useRef(null)
  const menu = useRef(null)
  const heroMessage = useRef(null)
  const pageSectionsList = useRef(null)
  const footer = useRef(null)

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
        // duration: 3000,
        easing: 'ease-in-out',
      })
    }

    activateScrollRevealAnimation()
  }, [])

  return (
    <div
      className={`w-screen h-screen overflow-x-hidden	 ${styles['home-background-image']}`}
    >
      <Head>
        <title>Home - Galaxy Blitz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="fixed w-full">
        <div className="flex flex-row justify-between items-center pl-0 pr-5 pt-5 lg:pt-10 lg:pl-3 lg:pr-8">
          <div className="" ref={logo}>
            <NavBarLogo />
          </div>
          <div className="" ref={menu}>
            <Menu />
          </div>
        </div>
      </div>

      <div className="h-full flex flex-row justify-between item-center px-12">
        <div ref={heroMessage} className="w-fit flex item-center">
          <HeroMessage />
        </div>

        <div ref={pageSectionsList} className="w-fit flex item-center">
          <PageSectionsList />
        </div>
      </div>

      <footer
        ref={footer}
        className="absolute bottom-0 w-full flex flex-row justify-between item-center px-12 h-24"
      >
        <div className="">
          <img src={'images/left-dashed-corner.svg'} />
        </div>

        <div className=" flex flex-col justify-center items-center space-y-2">
          <div className="py-5 px-2 rounded-full bottom-10 border-2 cursor-pointer">
            <div className="-my-3 py-1.5 px-0.5 rounded-full bg-white animate-bounce"></div>
          </div>

          <div>
            <p className="text-white uppercase font-patron">
              Start the experience
            </p>
          </div>
        </div>

        <div className="relative">
          <img src={'images/right-dashed-corner.svg'} />
          <div className="absolute right-5 bottom-10 flex justify-between w-60">
            <img
              src={'icons/discord.svg'}
              className="transition duration-0 hover:duration-150 hover:scale-125 cursor-pointer"
            />
            <img
              src={'icons/telegram.svg'}
              className="transition duration-0 hover:duration-150 hover:scale-125 cursor-pointer"
            />
            <img
              src={'icons/youtube.svg'}
              className="transition duration-0 hover:duration-150 hover:scale-125 cursor-pointer"
            />
            <img
              src={'icons/medium.svg'}
              className="transition duration-0 hover:duration-150 hover:scale-125 cursor-pointer"
            />
            <img
              src={'icons/twitter.svg'}
              className="transition duration-0 hover:duration-150 hover:scale-125 cursor-pointer"
            />
          </div>
        </div>
      </footer>
    </div>
  )
}
