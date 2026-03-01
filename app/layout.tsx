import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeSwitcher } from '@/components/theme-switcher'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Rohan Kumar - Full Stack Developer',
  description: 'Full Stack Developer specializing in React.js, Node.js, Express.js, and React Native. Explore my projects and experience.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/portfoliologo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/portfoliologo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/portfoliologo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased transition-colors duration-300">
        <ThemeSwitcher />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
