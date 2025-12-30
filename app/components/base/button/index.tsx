import type { FC, MouseEventHandler } from 'react'
import React from 'react'
import Spinner from '@/app/components/base/spinner'

export interface IButtonProps {
  type?: 'primary' | 'secondary' | 'ghost' | 'link'
  className?: string
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
  size?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'outline' | 'ghost'
}

const Button: FC<IButtonProps> = ({
  type = 'secondary',
  disabled,
  children,
  className,
  onClick,
  loading = false,
  size = 'md',
  variant = 'solid',
}) => {
  const baseStyles = 'inline-flex justify-center items-center font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs h-8',
    md: 'px-4 py-2 text-sm h-9',
    lg: 'px-6 py-3 text-base h-11'
  }

  const getVariantStyles = () => {
    const variants = {
      primary: {
        solid: 'bg-gradient-to-r from-[var(--accent-warm)] to-[#c97a5f] text-white border-transparent hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:ring-[var(--accent-warm)]',
        outline: 'border-[var(--accent-warm)] text-[var(--accent-warm)] bg-transparent hover:bg-[var(--accent-warm)] hover:text-white focus:ring-[var(--accent-warm)]',
        ghost: 'text-[var(--accent-warm)] bg-transparent hover:bg-[var(--accent-glow)] focus:ring-[var(--accent-warm)]'
      },
      secondary: {
        solid: 'bg-[var(--bg-secondary)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:bg-[var(--bg-tertiary)] hover:border-[var(--border-emphasis)] focus:ring-[var(--border-emphasis)]',
        outline: 'border-[var(--border-emphasis)] text-[var(--text-secondary)] bg-transparent hover:bg-[var(--bg-tertiary)] focus:ring-[var(--border-emphasis)]',
        ghost: 'text-[var(--text-secondary)] bg-transparent hover:bg-[var(--bg-tertiary)] focus:ring-[var(--border-emphasis)]'
      },
      ghost: {
        solid: 'bg-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] focus:ring-[var(--border-emphasis)]',
        outline: 'border-transparent text-[var(--text-secondary)] bg-transparent hover:border-[var(--border-emphasis)] focus:ring-[var(--border-emphasis)]',
        ghost: 'text-[var(--text-muted)] bg-transparent hover:text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] focus:ring-[var(--border-emphasis)]'
      },
      link: {
        solid: 'text-[var(--accent-warm)] bg-transparent hover:underline focus:ring-[var(--accent-warm)] p-0 h-auto',
        outline: 'text-[var(--accent-warm)] bg-transparent hover:underline focus:ring-[var(--accent-warm)] p-0 h-auto',
        ghost: 'text-[var(--accent-warm)] bg-transparent hover:underline focus:ring-[var(--accent-warm)] p-0 h-auto'
      }
    }

    return variants[type]?.[variant] || variants.secondary.solid
  }

  const styles = `${baseStyles} ${sizeStyles[size]} ${getVariantStyles()} ${className || ''}`

  return (
    <div
      className={styles}
      onClick={disabled || loading ? undefined : onClick}
      role="button"
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !disabled && !loading && onClick) {
          e.preventDefault()
          onClick(e as any)
        }
      }}
    >
      {loading && (
        <Spinner loading className='!text-white !h-4 !w-4 !border-2 !mr-2' />
      )}
      {children}
    </div>
  )
}

export default React.memo(Button)
