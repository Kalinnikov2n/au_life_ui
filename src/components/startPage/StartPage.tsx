import React, { useCallback, useContext, useMemo, useState } from 'react'
import { getImg, memojiConfig } from '../../config/memojiConfig'
import { useInput } from '../../hooks/useInput'
import MyScroll from '../common/myScroll/myScroll'
import { SocketContext } from '../socketProvider/SocketProvider'
export interface StartPageProps {
  setUser: () => void
}
const StartPage = React.memo<StartPageProps>(({ setUser }) => {
  const socket = useContext(SocketContext)
  const [avatar, setAvatar] = useState('')
  const { bind } = useInput('')
  const selectedAvatar = useMemo(() => getImg(avatar), [avatar])
  const userInfo = useMemo(
    () => ({
      name: bind.value,
      avatar,
    }),
    [avatar, bind.value]
  )
  const handleStart = useCallback(() => {
    setUser()
    socket.emit('init', { user: userInfo })
  }, [setUser, socket, userInfo])
  const handleAvatarSelect = useCallback((avatarName: string) => setAvatar(avatarName), [setAvatar])

  return (
    <div className="start-page">
      <div className="selected-avatar-container">
        {selectedAvatar && <img src={selectedAvatar} className="avatar" alt="selected-avatar" />}
      </div>
      <form className="start-page-form">
        <input {...bind} className="start-page-input" placeholder="Введите имя" />
        <button className="start-page-btn" onClick={handleStart}>
          Ок
        </button>
      </form>
      <div className="start-page-img-selector">
        <MyScroll className="my-scroll">
          <div className="start-page-img-list">
            {memojiConfig.map((memoji) => (
              <div
                className={`avatar-container avatar-container_is-selected-${memoji.name === avatar}`}
                key={memoji.name}
                onClick={() => handleAvatarSelect(memoji.name)}
              >
                <img className="avatar" src={memoji.src} alt={memoji.name} />
              </div>
            ))}
          </div>
        </MyScroll>
      </div>
    </div>
  )
})
StartPage.displayName = 'StartPage'
export default StartPage
