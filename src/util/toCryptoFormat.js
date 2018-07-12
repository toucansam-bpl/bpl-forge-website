export default function toCryptoFormat(amount) {
  return cryptoWithDigits(amount, 8)
}

export function cryptoWithDigits(amount, digits) {
  return amount.toFixed(digits)
}

export function formatWithoutDigits(amount) {
  return Number(amount.toFixed(0)).toLocaleString()
}
