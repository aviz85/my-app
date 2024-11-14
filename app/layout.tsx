import "./globals.css"
import "../styles/phone-input.css"
import { Heebo } from "next/font/google"
import { NavBar } from "@/components/nav-bar"

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
      <body className={heebo.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
