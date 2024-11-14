import "./globals.css"
import { Heebo } from "next/font/google"

const heebo = Heebo({ 
  subsets: ['hebrew'],
  weight: ['400', '500', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head />
      <body className={heebo.className}>{children}</body>
    </html>
  )
}
