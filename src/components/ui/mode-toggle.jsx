import { Moon02Icon, Sun03Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useMemo } from 'react'

import { Button } from '@/components/ui/button'
import { useTheme } from '@/providers/ThemeProvider'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const resolvedTheme = useMemo(() => {
    if (theme !== 'system') return theme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }, [theme])

  const handleToggle = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative size-[36px] cursor-pointer bg-transparent"
      onClick={handleToggle}
      aria-label="Toggle light and dark mode"
    >
      <HugeiconsIcon
        icon={Sun03Icon}
        size={18}
        strokeWidth={1.8}
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />

      <HugeiconsIcon
        icon={Moon02Icon}
        size={18}
        strokeWidth={1.8}
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />

      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
