import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
<div className="flex flex-col content-center justify-center ">
<div className='fon p-5 m-5 bg-red-500'>Hi there, welcome to this work in progress</div>
 
</div>


    </main>
  )
}
