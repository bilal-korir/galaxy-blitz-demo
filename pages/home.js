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

import Menu from '../components/menu'
import NavBarLogo from '../components/nav-bar-logo'
import log from '../utility/log'
import styles from './index.module.css'

export default function Home() {
  const paragraph = useRef(null)
  let ScrollReveal

  useEffect(() => {
    async function activateScrollRevealAnimation() {
      ScrollReveal = (await import('scrollreveal')).default

      ScrollReveal().reveal(paragraph.current, {
        delay: 2000,
        reset: false,
      })
    }

    activateScrollRevealAnimation()
  }, [])

  return (
    <div
      className={`h-screen relative py-10 px-20 ${styles['home-background-image']}`}
    >
      <Head>
        <title>Home - Galaxy Blitz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="fixed w-full">
        <div className="flex flex-row justify-between bg-amber-700">
          <NavBarLogo />
          <Menu />
        </div>
      </div>
    </div>
  )
}
