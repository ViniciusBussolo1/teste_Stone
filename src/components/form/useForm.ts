import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProps } from './type'
import { schemaForm } from './schema'

export const useFormConversion = () => {
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
      radioOption: 'dinheiro',
    },
  })

  return {
    register,
    errors,
    isValid,
    handleSubmit,
  }
}
