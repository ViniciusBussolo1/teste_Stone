import { z } from 'zod'

export const schemaForm = z.object({
  dinheiro: z.string().nonempty('Informe o valor em dolares'),
  taxa: z.string().nonempty('Informe a taxa'),
  radioOption: z.enum(['cartao', 'dinheiro']),
})
