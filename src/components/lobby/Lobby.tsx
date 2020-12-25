import React, { useState, useContext, useEffect } from 'react'
import { User } from '../../@types/common'
import { getImg } from '../../config/memojiConfig'
import MyScroll from '../common/myScroll/myScroll'
import { SocketContext } from '../socketProvider/SocketProvider'
import GameSettings from './GameSettings'

const Lobby = React.memo(() => {
  const [users, setUsers] = useState([])
  const [gameSettings, setUpGame] = useState({
    imposters: 1,
    killKD: '60000',
    discussTime: '80000',
    taskCounter: 6,
  })
  const socket = useContext(SocketContext)
  useEffect(() => {
    socket.on('newUser', (inf: any) => {
      setUsers(inf.users)
    })
    socket.on('changeSettings', (inf: any) => setUpGame(inf.settings))
  }, [socket, setUsers])
  return (
    <div className="lobby">
      <GameSettings {...gameSettings} />
      <div className="lobby-users-list-container">
        <MyScroll className="my-scroll">
          <div className="lobby-users-list">
            {users.map((user: User) => (
              <div key={user.id} className="lobby-user">
                <img src={getImg(user.avatar)} className="avatar" alt={user.avatar} />
                <div className="lobby-user-title">{user.name}</div>
              </div>
            ))}
          </div>
        </MyScroll>
      </div>
      <div className="loby-tools">
        <button className="loby-start">Начать</button>
      </div>
    </div>
  )
})
Lobby.displayName = 'Lobby'
export default Lobby
