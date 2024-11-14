"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'

interface RegisterFormProps {
  onLoginClick: () => void;
}

export function RegisterForm({ onLoginClick }: RegisterFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [phone, setPhone] = useState("")

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="space-y-4">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">דוא״ל</Label>
          <Input
            id="email"
            placeholder="your@email.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={isLoading}
            required
          />
        </div>
        <div className="space-y-2">
          <Label>טלפון</Label>
          <div dir="ltr">
            <PhoneInput
              country={'il'}
              value={phone}
              onChange={phone => setPhone(phone)}
              inputStyle={{
                width: '100%',
                height: '40px',
                fontSize: '16px',
                paddingLeft: '48px',
                borderRadius: 'var(--radius)',
                borderColor: 'hsl(var(--input))',
                backgroundColor: 'transparent'
              }}
              buttonStyle={{
                borderRadius: 'var(--radius) 0 0 var(--radius)',
                borderColor: 'hsl(var(--input))',
                backgroundColor: 'transparent'
              }}
              disabled={isLoading}
              enableSearch={true}
              searchPlaceholder="חיפוש מדינה..."
              searchNotFound="לא נמצאו תוצאות"
              preferredCountries={['il', 'us', 'gb', 'ru']}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">סיסמה</Label>
          <Input
            id="password"
            type="password"
            disabled={isLoading}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">אימות סיסמה</Label>
          <Input
            id="confirmPassword"
            type="password"
            disabled={isLoading}
            required
          />
        </div>
        <Button className="w-full" type="submit" disabled={isLoading}>
          {isLoading ? "נרשם..." : "הרשמה"}
        </Button>
      </form>

      <div className="text-center">
        <span className="text-muted-foreground">כבר יש לך חשבון? </span>
        <Button 
          variant="link" 
          className="px-1 font-medium text-primary hover:underline"
          onClick={onLoginClick}
        >
          התחבר כאן
        </Button>
      </div>
    </div>
  )
} 