'use client'

import { ReactNode, createContext } from 'react'

interface HandleCoinsContextDataProps {
  handleCoins: (dinheiro: string, radioOption: string, taxa: string) => void
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
  function handleCoins(dinheiro: string, radioOption: string, taxa: string) {
    console.log(dinheiro, radioOption, taxa)
  }

  return (
    <HandleCoinsContext.Provider value={{ handleCoins }}>
      {children}
    </HandleCoinsContext.Provider>
  )
}
