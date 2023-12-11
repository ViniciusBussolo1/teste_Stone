'use client'

import * as RadioGroup from '@radix-ui/react-radio-group'

import Image from 'next/image'
import Logo from '../../public/Logo.svg'
import Transfer from '../../public/Transfer.svg'
import Grafh from '../../public/Graph.svg'

export default function Home() {
  return (
    <main className="bg-mask bg-cover h-full pt-16 pl-16 ">
      <div className="max-w-[33.625rem] w-full flex items-center gap-12">
        <Image src={Logo} alt="Logo" />
        <div className="max-w-[20.438rem] w-full flex flex-col gap-2">
          <span className="text-lg leading-normal font-medium text-darkGray2">
            14 de janeiro 2021 | 21:00 UTC
          </span>
          <span className="text-sm leading-normal text-mediumGray2">
            Dados de câmbio disponibilizados pela Morningstar.
          </span>
        </div>
      </div>
      <div className="mt-[6.563rem] flex gap-[27.188rem]">
        <div className="max-w-[22.5rem] w-full ">
          <form className="w-full flex flex-col gap-8">
            <div className="flex gap-6">
              <div className="flex flex-col gap-[0.625rem]">
                <label
                  htmlFor="dolar"
                  className="text-lg leading-normal font-medium text-darkGray"
                >
                  Dólar
                </label>
                <input
                  id="dolar"
                  type="text"
                  placeholder="$ 1,00"
                  className="max-w-[10.5rem] w-full p-4"
                />
              </div>
              <div className="flex flex-col gap-[0.625rem]">
                <label
                  htmlFor="taxa"
                  className="text-lg leading-normal font-medium text-darkGray"
                >
                  Taxa do Estado
                </label>
                <input
                  id="taxa"
                  type="text"
                  placeholder="0%"
                  className="max-w-[10.5rem] w-full p-4"
                />
              </div>
            </div>

            <RadioGroup.Root>
              <div className="flex flex-col gap-4">
                <span className="text-lg leading-normal font-medium text-darkGray">
                  Tipo de Compra
                </span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <RadioGroup.Item
                      className="bg-white w-6 h-6 rounded-full border-[2px] border-mediumGray2 outline-none cursor-default"
                      value="dinheiro"
                      id="dinheiro"
                    >
                      <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[0.875rem] after:h-[0.875rem] after:rounded-[50%] after:bg-green " />
                    </RadioGroup.Item>
                    <label
                      className="text-base text-darkGray font-medium"
                      htmlFor="dinheiro"
                    >
                      Dinheiro
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    <RadioGroup.Item
                      className="bg-white w-6 h-6 rounded-full border-[2px] border-mediumGray2 outline-none cursor-default"
                      value="cartao"
                      id="cartao"
                    >
                      <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[0.875rem] after:h-[0.875rem] after:rounded-[50%] after:bg-green " />
                    </RadioGroup.Item>
                    <label
                      className="text-base text-darkGray font-medium"
                      htmlFor="cartao"
                    >
                      Cartão
                    </label>
                  </div>
                </div>
              </div>
            </RadioGroup.Root>

            <button
              type="submit"
              className="max-w-[9.313rem] w-full p-4 bg-mediumGray2 flex items-center gap-4 rounded-lg border border-green text-base font-semibold text-white"
            >
              <Image src={Transfer} alt="Transfer" />
              Converter
            </button>
          </form>
        </div>
        <Image src={Grafh} alt="Grafh" />
      </div>
    </main>
  )
}
