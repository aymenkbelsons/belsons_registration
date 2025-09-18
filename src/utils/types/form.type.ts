import z from 'zod'
import moment from 'moment'

export const ZForm = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),

  day: z.preprocess(
    (val) => Number(val),
    z.number().min(1, 'Invalid day').max(31, 'Invalid day')
  ),
  month: z.preprocess(
    (val) => Number(val),
    z.number().min(1, 'Invalid month').max(12, 'Invalid month')
  ),
  year: z.preprocess(
    (val) => Number(val),
    z
      .number()
      .min(1900, 'Invalid year')
      .max(new Date().getFullYear(), 'Invalid year')
  ),

  city: z.string().min(1, 'City is required'),
  country: z.string().min(1, 'Country is required'),
  occupation: z.string().optional(),
  message_1: z.string().min(1, 'Please tell us why you want to join'),
  message_2: z.string().min(1, 'Please tell us how you found us'),

  // ✅ Checkbox validation
  agree: z.literal(true, {
    message: 'You must agree before submitting',
  }),
}).transform((data) => ({
  ...data,
  date: moment({
    year: data.year,
    month: data.month - 1,
    day: data.day,
  }).format('YYYY-MM-DD'),
}))

export type TFormInput = z.input<typeof ZForm>
export type TFormOutput = z.infer<typeof ZForm>
