import Image from 'next/image'

import Logo from '../../../public/Logo.svg'

export function Header() {
  return (
    <header className="max-w-[33.625rem] w-full flex items-center gap-12">
      <Image src={Logo} alt="Logo" />
      <div className="max-w-[20.438rem] w-full flex flex-col gap-2">
        <span className="text-lg leading-normal font-medium text-darkGray2">
          14 de janeiro 2021 | 21:00 UTC
        </span>
        <span className="text-sm leading-normal text-mediumGray2">
          Dados de câmbio disponibilizados pela Morningstar.
        </span>
      </div>
    </header>
  )
}
