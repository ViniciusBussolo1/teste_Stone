'use client'

import Image from 'next/image'

import Grafh from '../../../public/Graph.svg'
import { Header } from '../header/header'
import { Form } from '../form/form'
import { useContext } from 'react'
import { HandleCoinsContext } from '@/context/handleCoinsContext'
import { Result } from '../result/result'

export function Main() {
  const { isOpen } = useContext(HandleCoinsContext)

  return (
    <main className="bg-mask bg-cover h-full pt-16 pl-16 ">
      <Header />
      <div className="mt-[6.563rem] flex gap-[27.188rem]">
        <div className="max-w-[22.5rem] w-full ">
          {isOpen === false ? <Form /> : <Result />}
        </div>
        <Image src={Grafh} alt="Grafh" />
      </div>
    </main>
  )
}
