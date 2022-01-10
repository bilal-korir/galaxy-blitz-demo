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

import log from '../utility/log'
import styles from './index.module.css'

export default function Home() {
  const paragraph = useRef(null)
  let ScrollReveal

  useEffect(() => {
    async function sr() {
      ScrollReveal = (await import('scrollreveal')).default

      ScrollReveal().reveal(paragraph.current, {
        delay: 2000,
        reset: false,
      })
    }

    sr()
  }, [])

  return (
    <div
      className={`h-screen flex justify-center items-center ${styles['home-background-image']}`}
    >
      <Head>
        <title>Home - Galaxy Blitz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
