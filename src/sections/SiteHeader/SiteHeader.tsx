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
        <div
          id={menuId}
          className='absolute right-0 top-full z-50 mt-2 w-[min(18rem,calc(100vw-3rem))] rounded-lg border border-white/15 bg-[rgb(0_12_20/0.92)] p-2 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur md:hidden'
          role='menu'
          aria-label='Меню'
        >
          <ul className='flex flex-col'>
            {navItems.map((item) => (
              <li key={item.href} role='none'>
                <a
                  role='menuitem'
                  href={item.href}
                  className='body-m block rounded-md px-3 py-2 text-white transition-colors hover:bg-white/5 hover:text-blue'
                  onClick={() => setMobileNavOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
