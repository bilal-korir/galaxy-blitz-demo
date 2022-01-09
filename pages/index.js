import 'tailwindcss/tailwind.css'

import {
  useEffect,
  useState,
} from 'react'

import Head from 'next/head'
import Link from 'next/link'

import styles from './index.module.css'

export default function Loading() {
  const [p, setP] = useState(0)

  function progress() {
    const t = setInterval(() => {
      setP((pre) => pre + 1)
      if (p === 100) clearInterval(t)
    }, 100)
  }

  useEffect(() => {
    progress()
  }, [])
  return (
    <div
      className={`h-screen flex justify-center items-center ${styles['background-image']}`}
    >
      <Head>
        <title>Loading - Galaxy Blitz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-50/100 space-y-3 ">
        <img src="logo.svg" className="mx-auto" />
        <p
          className={`text-3xl text-center text-white drop-shadow-3xl ${styles['shadow']}`}
        >
          Loading
        </p>

        <div className="mx-auto h-2 rounded-lg">
          <progress
            id="file"
            max="100"
            value={p}
            className="bg-black"
          ></progress>
        </div>
      </div>
    </div>
  )
}
