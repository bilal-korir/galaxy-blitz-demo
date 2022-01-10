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
  const navbar = useRef(null)
  const heroMessage = useRef(null)
  const pageSectionsList = useRef(null)
  const footer = useRef(null)

  let ScrollReveal

  useEffect(() => {
    async function activateScrollRevealAnimation() {
      ScrollReveal = (await import('scrollreveal')).default

      ScrollReveal().reveal(navbar.current, {
        delay: 1000,
        distance: '100%',
        origin: 'top',
        opacity: 0,
        duration: 3000,
        easing: 'ease',
      })

      // ScrollReveal().reveal(heroMessage.current, {
      //   delay: 500,
      //   distance: '100%',
      //   origin: 'left',
      //   opacity: 0,
      //   duration: 3000,
      //   easing: 'ease',
      // })

      ScrollReveal().reveal(pageSectionsList.current, {
        delay: 1000,
        distance: '100%',
        origin: 'right',
        opacity: 0,
        duration: 3000,
        easing: 'ease',
      })

      ScrollReveal().reveal(footer.current, {
        delay: 1000,
        distance: '100%',
        origin: 'bottom',
        opacity: 0,
        duration: 3000,
        easing: 'ease',
      })
    }

    activateScrollRevealAnimation()
  }, [])

  return (
    <section
      className={`h-screen relative py-10  ${styles['home-background-image']}`}
    >
      <Head>
        <title>Home - Galaxy Blitz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="fixed w-full" ref={navbar}>
        <div className="flex flex-row justify-between px-12">
          <NavBarLogo />
          <Menu />
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
            <div className="-my-3 py-1 px-0.5 rounded-full bg-white animate-bounce"></div>
          </div>

          <div>
            <p className="text-white uppercase">Start the experience</p>
          </div>
        </div>

        <div className="relative">
          <img src={'images/right-dashed-corner.svg'} />
          <div className="absolute right-5 bottom-10 flex justify-between w-60">
            <img src={'icons/discord.svg'} />
            <img src={'icons/telegram.svg'} />
            <img src={'icons/youtube.svg'} />
            <img src={'icons/medium.svg'} />
            <img src={'icons/twitter.svg'} />
          </div>
        </div>
      </footer>
    </section>
  )
}
