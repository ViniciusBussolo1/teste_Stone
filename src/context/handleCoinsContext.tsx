'use client'

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

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
  valorEmReais: number
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  valor: number
  compra: string
  taxaEscolhida: number
  reais: number
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
  const [valorEmReais, setValorEmReais] = useState(0)
  const [valor, setValor] = useState(0)
  const [compra, setCompra] = useState('')
  const [taxaEscolhida, setTaxaEscolhida] = useState(0)
  const [reais, setReais] = useState(0)

  const [isOpen, setIsOpen] = useState(false)

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

      const resultado = (dinheiroFloat + taxaFloat) * (bidFloat + IOFDinheiro)

      setValorEmReais(resultado)
      setValor(dinheiroFloat)
      setCompra(radioOption)
      setTaxaEscolhida(taxaFloat)
      setReais(bidFloat)
    } else {
      const parseFloatComCasasDecimais = (value: string) => {
        const numero = parseFloat(value.replace(',', '.'))
        return numero.toFixed(2)
      }

      const dinheiroFloat = parseFloat(parseFloatComCasasDecimais(dinheiro))
      const taxaFloat = parseFloat(parseFloatComCasasDecimais(taxa))
      const bidFloat = parseFloat(parseFloatComCasasDecimais(data.USDBRL.bid))
      const IOFCartao = parseFloat('6,4')

      const resultado = (dinheiroFloat + taxaFloat + IOFCartao) * bidFloat

      setValorEmReais(resultado)
      setValor(dinheiroFloat)
      setCompra(radioOption)
      setTaxaEscolhida(taxaFloat)
      setReais(bidFloat)
    }
  }

  return (
    <HandleCoinsContext.Provider
      value={{
        handleCoins,
        valorEmReais,
        isOpen,
        setIsOpen,
        compra,
        reais,
        taxaEscolhida,
        valor,
      }}
    >
      {children}
    </HandleCoinsContext.Provider>
  )
}
