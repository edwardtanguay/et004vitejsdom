export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is nnn ${counter}`
  }
  element.addEventListener('click', () => setCounter(++counter))
  setCounter(0)
}
