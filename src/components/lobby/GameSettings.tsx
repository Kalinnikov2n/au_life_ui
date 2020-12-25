import React, { useCallback, useContext, useMemo, useState } from 'react'
import { SettingsIcon } from '../../config/icons'
import { useInput } from '../../hooks/useInput'
import { timeReverseTransform, timeTransform } from '../../utils/timeTransform'
import { SocketContext } from '../socketProvider/SocketProvider'
export interface GameSettingsProps {
  imposters: number
  killKD: string
  discussTime: string
  taskCounter: number
}
const GameSettings = React.memo<GameSettingsProps>(({ imposters, killKD, discussTime, taskCounter }) => {
  const [isEditable, edit] = useState(false)
  const handleEdit = useCallback((status: boolean) => edit(status), [edit])
  const { parsedDiscussTime, parsedKillKD } = useMemo(
    () => ({
      parsedDiscussTime: timeTransform(discussTime),
      parsedKillKD: timeTransform(killKD),
    }),
    [killKD, discussTime]
  )
  const { bind: killKDBind, discard: killKDDiscard } = useInput(parsedKillKD)
  const { bind: discussTimeBind, discard: discussTimeDiscard } = useInput(parsedKillKD)
  const { bind: impostersBind, discard: impostersDiscard } = useInput(imposters.toString())
  const { bind: taskCounterBind, discard: taskCounterDiscard } = useInput(taskCounter.toString())
  const handleReset = useCallback(() => {
    killKDDiscard()
    discussTimeDiscard()
    impostersDiscard()
    taskCounterDiscard()
    handleEdit(false)
  }, [discussTimeDiscard, handleEdit, impostersDiscard, killKDDiscard, taskCounterDiscard])
  const socket = useContext(SocketContext)
  const preparedSettings = useMemo(
    () => ({
      imposters: parseInt(impostersBind.value),
      killKD: timeReverseTransform(killKDBind.value),
      discussTime: timeReverseTransform(discussTimeBind.value),
      taskCounter: parseInt(taskCounterBind.value),
    }),
    [discussTimeBind.value, impostersBind.value, killKDBind.value, taskCounterBind.value]
  )
  const hadleSave = useCallback(() => {
    socket.emit('changeSettings', { settings: preparedSettings })
    handleEdit(false)
  }, [handleEdit, preparedSettings, socket])
  return !isEditable ? (
    <div className="game-settings">
      <div className="game-settings-info">
        <div className="game-settings-text">Предателей - {imposters}</div>
        <div className="game-settings-text">КД на убийство - {parsedKillKD}</div>
        <div className="game-settings-text">Время на обсуждение - {parsedDiscussTime}</div>
        <div className="game-settings-text">Колличество заданий - {taskCounter}</div>
      </div>
      <button className="game-settings-btn" onClick={() => handleEdit(true)}>
        <SettingsIcon />
      </button>
    </div>
  ) : (
    <div className="game-settings-form">
      <div className="game-settings-element">
        <div className="game-settings-element-title">Колличество предателей</div>
        <input className="game-settings-element-input" {...impostersBind} placeholder="Введите значения" />
      </div>
      <div className="game-settings-element">
        <div className="game-settings-element-title">КД на убийство</div>
        <input className="game-settings-element-input" {...killKDBind} placeholder="Введите значения" />
      </div>
      <div className="game-settings-element">
        <div className="game-settings-element-title">Время на обсуждение</div>
        <input className="game-settings-element-input" {...discussTimeBind} placeholder="Введите значения" />
      </div>
      <div className="game-settings-element">
        <div className="game-settings-element-title">Колличество заданий</div>
        <input className="game-settings-element-input" {...taskCounterBind} placeholder="Введите значения" />
      </div>
      <div className="game-settings-form-tools">
        <button className="game-settings-form-btn" onClick={hadleSave}>
          Сохранить
        </button>
        <button className="game-settings-form-btn" onClick={handleReset}>
          Выйти
        </button>
      </div>
    </div>
  )
})
GameSettings.displayName = 'GameSettings'
export default GameSettings
