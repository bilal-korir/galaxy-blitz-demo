import 'tailwindcss/tailwind.css'

import Head from 'next/head'

import styles from './index.module.css'

export default function Loading() {
  return (
    <div className={`h-screen flex justify-center items-center `}>
      <Head>
        <title>Home - Galaxy Blitz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <p
          className={`text-3xl text-white drop-shadow-3xl ${styles['shadow']}`}
        >
          Loading
        </p>
      </div>
    </div>
  )
}
