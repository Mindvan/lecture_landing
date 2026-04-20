import { useEffect, useState } from 'react'

const TRANSITION_MS = 200

type FormFieldErrorProps = {
  id?: string
  message?: string
}

export function FormFieldError({ id, message }: FormFieldErrorProps) {
  const [body, setBody] = useState('')
  const [open, setOpen] = useState(false)

  const visible = Boolean(message || body)

  useEffect(() => {
    if (message) {
      setBody(message)
      setOpen(true)
    }
  }, [message])

  useEffect(() => {
    if (message || !body) return
    setOpen(false)
    const t = window.setTimeout(() => setBody(''), TRANSITION_MS)
    return () => window.clearTimeout(t)
  }, [message, body])

  if (!visible) {
    return null
  }

  const displayText = message || body

  return (
    <p
      id={id}
      role='alert'
      aria-hidden={!open}
      style={{ transitionDuration: `${TRANSITION_MS}ms` }}
      className={`program-group-validation caption absolute top-4/5 right-0 z-10 mt-2 w-max transition-[opacity,transform] ease-out ${
        open ? 'opacity-100' : 'opacity-0 -translate-y-0.5'
      }`}
    >
      {displayText}
    </p>
  )
}
