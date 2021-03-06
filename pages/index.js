import 'tailwindcss/tailwind.css'

import {
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'

import ProgressBar from '@ramonak/react-progress-bar'

import styles from './index.module.css'

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const router = useRouter()
  let interval

  function updateProgressBar() {
    interval = setInterval(() => {
      setProgress((prev) => prev + 1)
    }, 500)
  }

  useLayoutEffect(() => {
    updateProgressBar()
    if (progress === 15) {
      router.replace('/home')
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
    }
  }, [progress])

  return (
    <div
      className={`h-screen flex justify-center items-center ${styles['loading-background-image']} `}
    >
      <Head>
        <title>Loading - Galaxy Blitz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-50">
        <img src="images/logo.svg" className="mx-auto" width={100} />
        <h
          className={`text-2xl text-center mb-2 text-white ${styles['shadow']} font-patron uppercase`}
        >
          Loading
        </h>
        <ProgressBar
          completed={progress}
          maxCompleted={10}
          isLabelVisible={false}
          baseBgColor="#0D2B46"
          bgColor="#2595CC"
          height={3}
          borderRadius={100}
          transitionTimingFunction="ease-in"
        />
      </div>
    </div>
  )
}
