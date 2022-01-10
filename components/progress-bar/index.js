import styles from './index.module.css'

export default function ProgressBar({ progress }) {
  return (
    <div className="w-full py-2 bg-black rounded-full">
      <div
        className={`bg-white`}
        style={{ backgroundColor: 'red', width: 'inherit' }}
      ></div>
    </div>
  )
}
