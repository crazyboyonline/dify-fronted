import type { FC } from 'react'
import React from 'react'
import {
  Bars3Icon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid'
import AppIcon from '@/app/components/base/app-icon'
export interface IHeaderProps {
  title: string
  isMobile?: boolean
  onShowSideBar?: () => void
  onCreateNewChat?: () => void
}
const Header: FC<IHeaderProps> = ({
  title,
  isMobile,
  onShowSideBar,
  onCreateNewChat,
}) => {
  return (
    <div className="shrink-0 flex items-center justify-between h-12 px-4 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
      {isMobile
        ? (
          <div
            className='flex items-center justify-center h-8 w-8 cursor-pointer rounded-md hover:bg-[var(--bg-tertiary)] transition-colors'
            onClick={() => onShowSideBar?.()}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--text-secondary)]">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </div>
        )
        : <div></div>}
      <div className='flex items-center space-x-3'>
        <div className="w-6 h-6 bg-gradient-to-br from-[var(--accent-warm)] to-[#c97a5f] rounded flex items-center justify-center text-white text-xs font-semibold" style={{ boxShadow: '0 2px 8px var(--accent-glow)' }}>IC</div>
        <div className="text-sm text-[var(--text-primary)] font-medium">{title}</div>
      </div>
      {isMobile
        ? (
          <div className='flex items-center justify-center h-8 w-8 cursor-pointer rounded-md hover:bg-[var(--bg-tertiary)] transition-colors' onClick={() => onCreateNewChat?.()} >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--text-secondary)]">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>)
        : <div></div>}
    </div>
  )
}

export default React.memo(Header)
