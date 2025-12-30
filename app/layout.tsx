import { getLocaleOnServer } from '@/i18n/server'

import './styles/globals.css'
import './styles/markdown.scss'

export const metadata = {
  title: 'AI Chat Assistant',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

const LocaleLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const locale = await getLocaleOnServer()
  return (
    <html lang={locale ?? 'en'} className="h-full">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>" />
      </head>
      <body className="h-full">
        <div className="w-screen min-h-screen min-w-[300px]">
          {children}
        </div>
      </body>
    </html>
  )
}

export default LocaleLayout
