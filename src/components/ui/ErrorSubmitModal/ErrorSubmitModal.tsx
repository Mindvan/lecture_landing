import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'

type ErrorSubmitModalProps = {
  open: boolean
  onClose: () => void
  title: string
  description: string
}

export function ErrorSubmitModal({ open, onClose, title, description }: ErrorSubmitModalProps) {
  const titleId = useId()
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const body = document.body
    body.style.overflow = 'hidden'
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 0)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(t)
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open || typeof document === 'undefined') {
    return null
  }

  return createPortal(
    <div className='fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6'>
      <button
        type='button'
        className='absolute inset-0 cursor-default border-0 bg-blue-dark/50 backdrop-blur-[2px]'
        aria-label='Закрыть окно'
        onClick={onClose}
      />
      <div
        role='alertdialog'
        aria-modal='true'
        aria-labelledby={titleId}
        className='tiles-nohover relative z-10 w-full max-w-[26rem] h-auto border border-solid border-[#ff6600]/59 px-8 py-10 text-center text-white'
      >
        <div
          className='mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-solid border-[#ff6600]/50'
          style={{
            background:
              'linear-gradient(145deg, rgba(255, 102, 0, 0.2) 0%, rgba(255, 139, 61, 0.1) 100%)',
          }}
          aria-hidden
        >
          <svg
            width='26'
            height='26'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='text-[#ff8b3d]'
            aria-hidden
          >
            <path
              d='M12 9v4M12 17h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <h2 id={titleId} className='h3 mb-3 text-[#ff8b3d]'>
          {title}
        </h2>
        <p className='body-m mb-8 text-pretty text-white/90'>{description}</p>
        <button
          ref={closeBtnRef}
          type='button'
          className='btn-secondary body-m w-full max-w-none'
          onClick={onClose}
        >
          Закрыть
        </button>
      </div>
    </div>,
    document.body,
  )
}
