'use client'

import { ReactNode, createContext } from 'react'
import { number } from 'zod'

interface dataProps {
  USDBRL: {
    ask: string
    bid: string
    code: string
    codein: string
    create_date: string
    high: string
    low: string
    name: string
    pctChange: string
    timestamp: string
    varBid: string
  }
}

interface HandleCoinsContextDataProps {
  handleCoins: (
    dinheiro: string,
    radioOption: string,
    taxa: string,
    data: dataProps,
  ) => void
}

interface HandleCoinsContextProvidersProps {
  children: ReactNode
}

export const HandleCoinsContext = createContext(
  {} as HandleCoinsContextDataProps,
)

export function HandleCoinsContextProvider({
  children,
}: HandleCoinsContextProvidersProps) {
  function handleCoins(
    dinheiro: string,
    radioOption: string,
    taxa: string,
    data: dataProps,
  ) {
    if (radioOption === 'dinheiro') {
      const parseFloatComCasasDecimais = (value: string) => {
        const numero = parseFloat(value.replace(',', '.'))
        return numero.toFixed(2)
      }

      const dinheiroFloat = parseFloat(parseFloatComCasasDecimais(dinheiro))
      const taxaFloat = parseFloat(parseFloatComCasasDecimais(taxa))
      const bidFloat = parseFloat(parseFloatComCasasDecimais(data.USDBRL.bid))
      const IOFDinheiro = parseFloat('1,1')

      const valorEmReais =
        (dinheiroFloat + taxaFloat) * (bidFloat + IOFDinheiro)
    } else {
      const parseFloatComCasasDecimais = (value: string) => {
        const numero = parseFloat(value.replace(',', '.'))
        return numero.toFixed(2)
      }

      const dinheiroFloat = parseFloat(parseFloatComCasasDecimais(dinheiro))
      const taxaFloat = parseFloat(parseFloatComCasasDecimais(taxa))
      const bidFloat = parseFloat(parseFloatComCasasDecimais(data.USDBRL.bid))
      const IOFCartao = parseFloat('6,4')

      const valorEmReais = (dinheiroFloat + taxaFloat + IOFCartao) * bidFloat
    }
  }

  return (
    <HandleCoinsContext.Provider value={{ handleCoins }}>
      {children}
    </HandleCoinsContext.Provider>
  )
}
