'use client'

import { Icons } from '../icons'
import { useMounted } from '@/hooks/use-mounted'
import { useTheme } from '@/hooks/use-theme'
import { AnimatePresence, motion, type HTMLMotionProps } from 'framer-motion'
import * as React from 'react'

type IconButtonProps = HTMLMotionProps<'button'> &
  React.ComponentPropsWithRef<'button'>

const IconButton: React.FC<IconButtonProps> = ({ children, ...props }) => (
  <motion.button
    {...props}
    initial={{ opacity: 0, rotate: -65, originY: '150%', originX: 0.5 }}
    animate={{ opacity: 1, rotate: 0 }}
    transition={{ duration: 0.4, ease: 'backOut' }}
  >
    {children}
  </motion.button>
)
IconButton.displayName = 'IconButton'

export const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const mounted = useMounted()

  const isDarkMode = theme === 'dark'

  if (!mounted) return null

  return (
    <AnimatePresence mode='wait'>
      {isDarkMode ? (
        <IconButton
          key='light-mode'
          className='overflow-hidden text-orange-600 transition-all  duration-200 ease-linear hover:text-yellow-500 dark:text-gray-300 dark:hover:text-[#eaf27c] '
          onClick={toggleTheme}
        >
          <Icons.sun size={24} />
        </IconButton>
      ) : (
        <IconButton
          key='dark-mode'
          className=' dark:text-dark-300  dark:hover:text-dark-200 overflow-hidden rounded-full bg-transparent transition-all duration-100 hover:text-blue-600 '
          onClick={toggleTheme}
        >
          <Icons.moon size={24} />
        </IconButton>
      )}
    </AnimatePresence>
  )
}
