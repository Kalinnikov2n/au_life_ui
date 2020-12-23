import React, { useState, useContext, useEffect } from 'react'
import { SocketContext } from '../socketProvider/SocketProvider'

const Lobby = React.memo(() => {
  const [userCounter, setUser] = useState(0)
  const socket = useContext(SocketContext)
  useEffect(() => {
    socket.on('newUser', (inf: any) => setUser(inf.users.length))
  }, [socket, setUser])
  return <div className="lobby">{userCounter}</div>
})
Lobby.displayName = 'Lobby'
export default Lobby
