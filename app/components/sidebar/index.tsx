import React from 'react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import {
  ChatBubbleOvalLeftEllipsisIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline'
import { ChatBubbleOvalLeftEllipsisIcon as ChatBubbleOvalLeftEllipsisSolidIcon } from '@heroicons/react/24/solid'
import Button from '@/app/components/base/button'
// import Card from './card'
import type { ConversationItem } from '@/types/app'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const MAX_CONVERSATION_LENTH = 20

export interface ISidebarProps {
  copyRight: string
  currentId: string
  onCurrentIdChange: (id: string) => void
  list: ConversationItem[]
}

const Sidebar: FC<ISidebarProps> = ({
  copyRight,
  currentId,
  onCurrentIdChange,
  list,
}) => {
  const { t } = useTranslation()
  return (
    <div
      className="shrink-0 flex flex-col overflow-y-auto bg-[var(--bg-secondary)] pc:w-[260px] tablet:w-[192px] mobile:w-[240px] border-r border-[var(--border-subtle)] tablet:h-[calc(100vh_-_3rem)] mobile:h-screen"
      style={{ animation: 'slideIn 0.8s cubic-bezier(0.23, 1, 0.32, 1)' }}
    >
      <div className="flex flex-shrink-0 p-6 !pb-4">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-7 h-7 bg-gradient-to-br from-[var(--accent-warm)] to-[#c97a5f] rounded-md flex items-center justify-center text-white text-sm font-semibold shadow-lg" style={{ boxShadow: '0 2px 12px var(--accent-glow)' }}>IC</div>
          <span className="text-[var(--text-primary)] font-medium text-base">智能客服</span>
        </div>
        {list.length < MAX_CONVERSATION_LENTH && (
          <button
            onClick={() => { onCurrentIdChange('-1') }}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[var(--accent-warm)] to-[#c97a5f] border-none rounded-lg text-white text-sm font-medium transition-all duration-250 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            style={{ boxShadow: '0 4px 20px var(--accent-glow)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14" />
            </svg>
            新对话
          </button>
        )}
      </div>

      <nav className="flex-1 px-4 pb-4 space-y-1">
        {list.map((item, index) => {
          const isCurrent = item.id === currentId
          return (
            <div
              onClick={() => onCurrentIdChange(item.id)}
              key={item.id}
              className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-md cursor-pointer text-sm transition-all duration-200 opacity-0 ${isCurrent
                ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]'
                : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]'
                }`}
              style={{ animationDelay: `${0.1 + index * 0.05}s`, animation: 'fadeIn 0.4s ease forwards' }}
            >
              <div className={`w-1 h-1 rounded-full flex-shrink-0 ${isCurrent ? 'bg-[var(--accent-warm)]' : 'bg-[var(--text-muted)]'
                }`} style={isCurrent ? { boxShadow: '0 0 8px var(--accent-glow)' } : {}}></div>
              <span className="truncate">{item.name}</span>
            </div>
          )
        })}
      </nav>
      <div className="flex flex-shrink-0 px-6 pb-4 pt-2 border-t border-[var(--border-subtle)]">
        <div className="text-[var(--text-muted)] font-normal text-xs">© {copyRight} {(new Date()).getFullYear()}</div>
      </div>
    </div>
  )
}

export default React.memo(Sidebar)
