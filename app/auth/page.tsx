"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LoginForm } from "@/components/auth/login-form"
import { RegisterForm } from "@/components/auth/register-form"
import { useState } from "react"

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login")

  return (
    <div className="container flex min-h-[calc(100vh-3.5rem)] items-center justify-center">
      <div className="mx-auto w-full max-w-[400px] space-y-6 py-10">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">התחברות</TabsTrigger>
            <TabsTrigger value="register">הרשמה</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">התחברות</CardTitle>
                <CardDescription>
                  הזן את פרטי ההתחברות שלך
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LoginForm onRegisterClick={() => setActiveTab("register")} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">הרשמה</CardTitle>
                <CardDescription>
                  צור חשבון חדש במערכת
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RegisterForm onLoginClick={() => setActiveTab("login")} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 