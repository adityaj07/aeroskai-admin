export const formatCompactNumber = (value) => {
  if (value === null || value === undefined) return '0'

  const isCurrency = typeof value === 'string' && value.includes('$')

  const parsedNumber = Number(value.toString().replace(/[^0-9.-]+/g, ''))

  if (isNaN(parsedNumber)) return '0'

  const formatter = new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1,
  })

  const formatted = formatter.format(parsedNumber).toLowerCase()

  return isCurrency ? `$${formatted}` : formatted
}
