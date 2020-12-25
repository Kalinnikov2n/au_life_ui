export const timeTransform = (time: string) => {
  const parsedTime = parseInt(time) / 1000
  const seconds = (parsedTime % 60).toString()
  const minutes = Math.floor(parsedTime / 60).toString()
  return `${minutes.length === 1 ? `0${minutes}` : minutes}:${seconds.length === 1 ? `0${seconds}` : seconds}`
}
export const timeReverseTransform = (time: string) => {
  const minutes = parseInt(time.split(':')[0]) * 60 * 1000
  const seconds = parseInt(time.split(':')[1]) * 1000
  return (minutes + seconds).toString()
}
