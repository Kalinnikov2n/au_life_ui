import React from 'react'
// import { Switch } from 'react-router'
import Lobby from '../lobby/Lobby'
const Router = React.memo(() => {
  return <Lobby />
})
Router.displayName = 'Router'
export default Router
