import type { NextRequest } from 'next/server'
import { client, getInfo } from '@/app/api/utils/common'
import axios from 'axios'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const {
    inputs,
    query,
    files,
    conversation_id: conversationId,
    response_mode: responseMode,
  } = body
  const { user } = getInfo(request)
  // responseMode 是 "streaming" 字符串，需要转换为布尔值
  const stream = responseMode === 'streaming'

  // 🔍 调试日志：查看实际发送的参数
  console.log('=== Dify API Request ===')
  console.log('Inputs:', JSON.stringify(inputs, null, 2))
  console.log('Query:', query)
  console.log('User:', user)
  console.log('Conversation ID:', conversationId)
  console.log('Files:', files)
  console.log('Stream:', stream)
  console.log('========================')

  // 🔧 修复：直接构建请求数据，确保 conversation_id 总是包含
  const data: Record<string, any> = {
    inputs,
    query,
    user,
    response_mode: stream ? 'streaming' : 'blocking',
    files: files || [],
  }
  // ⚠️ 重要：明确设置 conversation_id，即使为空字符串也要包含
  // 这与 Dify 官方平台的行为一致
  data.conversation_id = conversationId || ''

  // 获取 API URL 和 Key
  const API_KEY = process.env.NEXT_PUBLIC_APP_KEY
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.dify.ai/v1'

  // 直接发送请求到 Dify API
  const response = await axios({
    method: 'POST',
    url: `${API_URL}/chat-messages`,
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    data,
    responseType: 'stream',
  })

  return new Response(response.data as any)
}
