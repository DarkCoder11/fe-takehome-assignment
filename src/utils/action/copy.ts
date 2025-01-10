const copyToClipboardWithDom = async (
  text: string,
) => {
  const area = document.createElement('textarea')

  area.value = text

  area.style.top = '0'
  area.style.left = '0'
  area.style.position = 'fixed'

  document.body.appendChild(area)

  area.focus()
  area.select()

  try {
    return document.execCommand('copy')
  } catch (err) {
    return false
  } finally {
    document.body.removeChild(area)
  }
}

export const copyToClipboard = async (
  text: string,
) => {
  if (!navigator.clipboard) {
    return copyToClipboardWithDom(text)
  }

  try {
    await navigator.clipboard.writeText(text)

    return true
  } catch (exc) {
    return false
  }
}
