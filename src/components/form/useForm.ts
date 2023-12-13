'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProps } from './type'
import { schemaForm } from './schema'
import { useQuery } from '@tanstack/react-query'
import api from '@/services/api'
import { useContext } from 'react'
import { HandleCoinsContext } from '@/context/handleCoinsContext'

export const useFormConversion = () => {
  const { handleCoins } = useContext(HandleCoinsContext)

  const getCoins = async () => {
    const result = await api.get('/last/USD-BRL')

    return result.data
  }

  const { data } = useQuery({
    queryKey: ['coins'],
    queryFn: getCoins,
  })

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<FormProps>({
    mode: 'onChange',
    resolver: zodResolver(schemaForm),
    defaultValues: {
      dinheiro: '',
      taxa: '',
      radioOption: undefined,
    },
  })

  const handleSubmitForm = ({ dinheiro, radioOption, taxa }: FormProps) => {
    handleCoins(dinheiro, radioOption, taxa)
  }

  return {
    register,
    errors,
    isValid,
    handleSubmitForm,
    handleSubmit,
  }
}
