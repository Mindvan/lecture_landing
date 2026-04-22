import { useEffect, useId, useRef, useState } from 'react'
import { Logo } from '../../components/ui/Logo/Logo'
import { navItems } from '../../data/navigation'

export function SiteHeader() {
  const menuId = useId()
  const rootRef = useRef<HTMLElement>(null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    if (!mobileNavOpen) return

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const root = rootRef.current
      if (!root) return
      const target = event.target as Node | null
      if (!target) return
      if (root.contains(target)) return
      setMobileNavOpen(false)
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileNavOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown, { passive: true })
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileNavOpen])

  useEffect(() => {
    if (!mobileNavOpen) return
    const html = document.documentElement
    const body = document.body
    const prevHtmlOverflow = html.style.overflow
    const prevBodyOverflow = body.style.overflow
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    return () => {
      html.style.overflow = prevHtmlOverflow
      body.style.overflow = prevBodyOverflow
    }
  }, [mobileNavOpen])

  return (
    <header ref={rootRef} className='relative flex w-full flex-col'>
      <div className='flex min-h-0 flex-1 flex-row items-center justify-between md:items-stretch'>
        <Logo width={153.28} height={42} color='#fff' />

        <button
          type='button'
          className='inline-flex size-6 items-center justify-center rounded-md text-white md:hidden'
          aria-label={mobileNavOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={mobileNavOpen}
          aria-controls={menuId}
          onClick={() => setMobileNavOpen((v) => !v)}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden
          >
            <path
              d='M4 7H20'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
            <path
              d='M4 12H20'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
            <path
              d='M4 17H20'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
          </svg>
        </button>

        <nav className='hidden flex-1 items-center justify-end md:flex' aria-label='Основная навигация'>
          <ul className='flex gap-x-[1.5rem]'>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className='body-m text-white transition-[color,text-decoration-color] duration-200 ease-out hover:text-blue'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {mobileNavOpen ? (
        <>
          <button
            type='button'
            className='fixed inset-0 z-40 cursor-default border-0 bg-blue-dark/72 backdrop-blur-[3px] md:hidden'
            aria-label='Закрыть меню'
            onClick={() => setMobileNavOpen(false)}
          />
          <div
            id={menuId}
            className='btn-secondary absolute right-0 top-full z-50 mt-2 h-[108px] w-[133px] rounded-[8px] p-2 text-right text-[14px] font-normal md:hidden'
            role='menu'
            aria-label='Меню'
          >
            <ul className='flex flex-col gap-2'>
              {navItems.map((item) => (
                <li key={item.href} role='none'>
                  <a
                    role='menuitem'
                    href={item.href}
                    className='block rounded-md p-0 text-white text-[14px] font-normal transition-colors hover:bg-white/5 hover:text-blue'
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : null}
    </header>
  )
}
