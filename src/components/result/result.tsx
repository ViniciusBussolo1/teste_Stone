'use clien'

import Image from 'next/image'
import Arrow from '../../../public/Arrow.svg'
import { useContext } from 'react'
import { HandleCoinsContext } from '@/context/handleCoinsContext'

export function Result() {
  const { valorEmReais, compra, taxaEscolhida, reais } =
    useContext(HandleCoinsContext)

  const converterEmReais = (valor: number) => {
    const valorEmReais = valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    return valorEmReais
  }

  return (
    <div className="w-full flex flex-col gap-8">
      <button className="max-w-[7.5rem] w-full flex items-center gap-4 p-4 border border-mediumGray3 rounded-lg text-base font-semibold text-darkGray">
        <Image src={Arrow} alt="Flecha" />
        Voltar
      </button>

      <div>
        <h3 className="text-xl leading-8 font-semibold text-darkGray2">
          O resultado do cálculo é
        </h3>
        <span className="text-[4rem] leading-[5rem] font-semibold text-stoneGreen">
          {converterEmReais(valorEmReais)}
        </span>
      </div>

      <div className="flex flex-col">
        <span className="text-sm leading-8 text-mediumGray">
          Compra no {compra} e taxa de {taxaEscolhida}%
        </span>
        <span className="text-sm leading-8 text-mediumGray">
          Cotação do dólar: $1,00 = R$ {reais}
        </span>
      </div>
    </div>
  )
}
