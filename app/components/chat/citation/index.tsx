'use client'
import type { FC } from 'react'
import type { CitationItem } from '../type'
import { DocumentTextIcon } from '@heroicons/react/24/outline'

interface Props {
  citations: CitationItem[]
}

const Citation: FC<Props> = ({ citations }) => {
  if (!citations || citations.length === 0) {
    return null
  }

  return (
    <div className="mt-3 space-y-2">
      <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
        <DocumentTextIcon className="w-4 h-4" />
        <span>参考来源 ({citations.length})</span>
      </div>
      <div className="space-y-1.5">
        {citations.map((citation, index) => (
          <div
            key={`${citation.segment_id}-${index}`}
            className="group relative flex items-start gap-2 p-2.5 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer border border-gray-200"
          >
            {/* 序号标记 */}
            <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center bg-[#6366F1] text-white text-xs font-medium rounded-full">
              {index + 1}
            </div>

            {/* 引用内容 */}
            <div className="flex-1 min-w-0">
              {/* 文档名称 */}
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium text-gray-700 truncate">
                  {citation.document_name}
                </span>
                {citation.score && (
                  <span className="flex-shrink-0 text-[10px] px-1.5 py-0.5 bg-green-100 text-green-700 rounded">
                    {(citation.score * 100).toFixed(0)}%
                  </span>
                )}
              </div>

              {/* 内容片段 */}
              <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                {citation.content}
              </p>

              {/* 元数据 */}
              <div className="flex items-center gap-3 mt-1.5 text-[10px] text-gray-400">
                <span>{citation.dataset_name}</span>
                <span>·</span>
                <span>位置: {citation.segment_position}</span>
                {citation.word_count > 0 && (
                  <>
                    <span>·</span>
                    <span>{citation.word_count} 字</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Citation
