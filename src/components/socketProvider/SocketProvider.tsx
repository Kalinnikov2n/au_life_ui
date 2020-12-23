import React from 'react'
import { io } from 'socket.io-client'
const socket = io('192.168.1.44:5000')
export const SocketContext = React.createContext(socket)
export const SocketProvider = React.memo(({ children }) => {
  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
})
