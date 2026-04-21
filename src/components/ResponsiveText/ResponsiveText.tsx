type ResponsiveTextValue = {
  desktop: readonly string[]
  tablet: readonly string[]
}

export function ResponsiveText({ value }: { value: ResponsiveTextValue }) {
  return (
    <>
      <span className='hidden md:max-lg:flex flex-col gap-[0.13rem]'>
        {value.tablet.map((line, idx) => (
          <span key={`t-${idx}`}>{line}</span>
        ))}
      </span>

      <span className='md:max-lg:hidden'>
        {value.desktop.map((line, idx) => (
          <span key={`d-${idx}`}>
            {line}
            {idx < value.desktop.length - 1 ? <br className='hidden lg:block' /> : null}
          </span>
        ))}
      </span>
    </>
  )
}

