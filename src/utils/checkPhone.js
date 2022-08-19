export const cleanPhone = (phone) => {
  if (phone.toString()[0] === '0')
    return phone.toString().split(1, phone.toString().length - 1)

  return phone
}
