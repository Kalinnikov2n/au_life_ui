import React, { useCallback, useState } from 'react'
import Router from './components/router/Router'
import StartPage from './components/startPage/StartPage'

const App = React.memo(() => {
  const [user, setUser] = useState(false)
  const handleSetUser = useCallback(() => setUser((prev) => !prev), [setUser])
  return <div className="main theme1">{user ? <Router /> : <StartPage setUser={handleSetUser} />}</div>
})

export default App
