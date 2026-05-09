export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount)

export const parseCurrencyAmount = (amount) => Number(String(amount).replace(/[^0-9.-]+/g, '')) || 0
