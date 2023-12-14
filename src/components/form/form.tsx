'use client'

import { useFormConversion } from './useForm'

import Transfer from '../../../public/Transfer.svg'
import Image from 'next/image'

export function Form() {
  const { errors, isValid, register, handleSubmit, handleSubmitForm } =
    useFormConversion()

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="w-full flex flex-col gap-8"
    >
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
            placeholder="$ 1.00"
            className="max-w-[10.5rem] w-full p-4 border border-darkGray3 rounded"
            {...register('dinheiro')}
          />
          <span className="text-red-600 text-sm">
            {errors.dinheiro?.message}
          </span>
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
          <span className="text-red-600 text-sm">{errors.taxa?.message}</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-lg leading-normal font-medium text-darkGray">
          Tipo de Compra
        </span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="dinheiro"
              value="dinheiro"
              className="bg-white w-6 h-6 rounded-full border-[4px] border-mediumGray2 outline-none cursor-default checked:text-green"
              {...register('radioOption')}
            />
            <label
              className="text-base text-darkGray font-medium"
              htmlFor="dinheiro"
            >
              Dinheiro
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="cartao"
              value="cartao"
              className="bg-white w-6 h-6 rounded-full border-[4px] border-mediumGray2 outline-none cursor-default checked:text-green"
              {...register('radioOption')}
            />
            <label
              className="text-base text-darkGray font-medium"
              htmlFor="cartao"
            >
              Cartão
            </label>
          </div>
        </div>
      </div>

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
