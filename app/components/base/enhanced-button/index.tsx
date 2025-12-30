import type { FC, MouseEventHandler } from 'react'
import React, { useState } from 'react'

export interface IEnhancedButtonProps {
    variant?: 'primary' | 'secondary' | 'ghost' | 'link' | 'danger'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    loading?: boolean
    disabled?: boolean
    icon?: React.ReactNode
    iconPosition?: 'left' | 'right'
    fullWidth?: boolean
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
    onClick?: MouseEventHandler<HTMLButtonElement>
    className?: string
    children: React.ReactNode
}

const EnhancedButton: FC<IEnhancedButtonProps> = ({
    variant = 'secondary',
    size = 'md',
    loading = false,
    disabled = false,
    icon,
    iconPosition = 'left',
    fullWidth = false,
    rounded = 'lg',
    onClick,
    children,
    className = '',
    ...props
}) => {
    const [isPressed, setIsPressed] = useState(false)

    const baseStyles = `
    inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden
    disabled:cursor-not-allowed disabled:opacity-50
    ${fullWidth ? 'w-full' : ''}
  `

    const sizeStyles = {
        xs: 'px-2 py-1 text-xs h-6 gap-1',
        sm: 'px-3 py-1.5 text-xs h-8 gap-1.5',
        md: 'px-4 py-2 text-sm h-9 gap-2',
        lg: 'px-6 py-3 text-base h-11 gap-2.5',
        xl: 'px-8 py-4 text-lg h-13 gap-3'
    }

    const roundedStyles = {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full'
    }

    const variantStyles = {
        primary: `
      bg-gradient-to-r from-[var(--accent-warm)] to-[#c97a5f] 
      text-white border-transparent 
      hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]
      focus:ring-[var(--accent-warm)]
      ${isPressed ? 'scale-[0.98]' : ''}
    `,
        secondary: `
      bg-[var(--bg-secondary)] text-[var(--text-primary)] 
      border-[var(--border-subtle)]
      hover:bg-[var(--bg-tertiary)] hover:border-[var(--border-emphasis)]
      focus:ring-[var(--border-emphasis)]
      ${isPressed ? 'bg-[var(--bg-tertiary)]' : ''}
    `,
        ghost: `
      bg-transparent text-[var(--text-secondary)]
      hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]
      focus:ring-[var(--border-emphasis)]
      ${isPressed ? 'bg-[var(--bg-tertiary)]' : ''}
    `,
        link: `
      bg-transparent text-[var(--accent-warm)] p-0 h-auto
      hover:underline focus:ring-[var(--accent-warm)]
      ${isPressed ? 'underline' : ''}
    `,
        danger: `
      bg-gradient-to-r from-red-500 to-red-600
      text-white border-transparent
      hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]
      focus:ring-red-500
      ${isPressed ? 'scale-[0.98]' : ''}
    `
    }

    const handleMouseDown = () => setIsPressed(true)
    const handleMouseUp = () => setIsPressed(false)
    const handleMouseLeave = () => setIsPressed(false)

    const renderContent = () => {
        if (loading) {
            return (
                <>
                    <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                    <span>{children}</span>
                </>
            )
        }

        if (icon && iconPosition === 'left') {
            return (
                <>
                    <span className="flex-shrink-0">{icon}</span>
                    <span>{children}</span>
                </>
            )
        }

        if (icon && iconPosition === 'right') {
            return (
                <>
                    <span>{children}</span>
                    <span className="flex-shrink-0">{icon}</span>
                </>
            )
        }

        return <span>{children}</span>
    }

    return (
        <button
            className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${roundedStyles[rounded]}
        ${variantStyles[variant]}
        ${className}
      `}
            disabled={disabled || loading}
            onClick={onClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {/* Ripple effect container */}
            <div className="absolute inset-0 rounded-inherit overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center">
                {renderContent()}
            </div>
        </button>
    )
}

export default React.memo(EnhancedButton)
