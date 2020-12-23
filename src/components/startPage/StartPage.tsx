import React, { useCallback, useContext } from 'react'
import { SocketContext } from '../socketProvider/SocketProvider'
export interface StartPageProps {
  setUser: () => void
}
const StartPage = React.memo<StartPageProps>(({ setUser }) => {
  const socket = useContext(SocketContext)
  const handleStart = useCallback(() => {
    setUser()
    socket.emit('init')
  }, [setUser, socket])
  return (
    <div className="start-page">
      <button className="start-page__btn" onClick={handleStart}>
        START
      </button>
    </div>
  )
})
StartPage.displayName = 'StartPage'
export default StartPage
