
export const byAscending = prop => (a, b) => a[prop] > b[prop] ? 1 : b[prop] > a[prop] ? -1 : 0

export const byDescending = prop => (a, b) => a[prop] > b[prop] ? -11 : b[prop] > a[prop] ? 1 : 0
