"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { User } from "lucide-react"
import { useState, useEffect } from "react"

export function NavBar() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // כאן תוכל לבדוק אם המשתמש מחובר
    // לדוגמה: בדיקת טוקן בלוקל סטורג'
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  const handleClick = () => {
    if (isLoggedIn) {
      router.push('/dashboard') // או כל נתיב אחר לאזור האישי
    } else {
      router.push('/auth')
    }
  }

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="font-bold text-xl">הלוגו שלי</div>
        
        <Button 
          variant="ghost" 
          className="flex items-center gap-2"
          onClick={handleClick}
        >
          <User className="h-5 w-5" />
          <span>{isLoggedIn ? 'אזור אישי' : 'התחברות'}</span>
        </Button>
      </div>
    </nav>
  )
} 