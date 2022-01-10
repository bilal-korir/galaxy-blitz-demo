import 'tailwindcss/tailwind.css'

import {
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'

import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import ProgressBar from '@ramonak/react-progress-bar'

import log from '../utility/log'
import styles from './index.module.css'

export default function Home() {
  return (
    <div className={`h-screen flex justify-center items-center `}>
      <Head>
        <title>Home - Galaxy Blitz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p className={`text-1xl text-black drop-shadow-3xl ${styles['shadow']}`}>
        Loading
      </p>
    </div>
  )
}
