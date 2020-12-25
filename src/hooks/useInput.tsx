import { ChangeEvent, useMemo, useState } from 'react'

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)

  return useMemo(() => ({
    reset: (value?: string) => setValue(value ? value : ''),
    bind: {
      value: value || '',
      onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(event.target.value)
      },
    },
    discard: () => setValue(initialValue),
  }), [value, initialValue])
}
