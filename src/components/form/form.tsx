'use client'

import * as RadioGroup from '@radix-ui/react-radio-group'

import Transfer from '../../../public/Transfer.svg'
import Image from 'next/image'
import { useFormConversion } from './useForm'
import { isValid } from 'zod'

export function Form() {
  const { errors, isValid, register } = useFormConversion()

  return (
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
            className="max-w-[10.5rem] w-full p-4 border border-darkGray3 rounded"
            {...register('dinheiro')}
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
            className="max-w-[10.5rem] w-full p-4 border border-darkGray3 rounded"
            {...register('taxa')}
          />
        </div>
      </div>

      <RadioGroup.Root defaultValue="dinheiro">
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
                {...register('radioOption')}
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
                {...register('radioOption')}
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

      {!isValid ? (
        <button
          type="submit"
          disabled={!isValid}
          className="max-w-[9.313rem] w-full p-4 bg-mediumGray2 flex items-center gap-4 rounded-lg border border-green text-base font-semibold text-white cursor-not-allowed"
        >
          <Image src={Transfer} alt="Transfer" />
          Converter
        </button>
      ) : (
        <button
          type="submit"
          className="max-w-[9.313rem] w-full p-4 bg-stoneGreen hover:bg-green flex items-center gap-4 rounded-lg border border-green text-base font-semibold text-white"
        >
          <Image src={Transfer} alt="Transfer" />
          Converter
        </button>
      )}
    </form>
  )
}
