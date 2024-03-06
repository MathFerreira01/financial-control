'use client'

import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function AuthForm() {
  return (
    <main className="flex justify-center items-center h-screen px-5">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2">
          <div className="space-y-2">
            <h2 className="text-lg font-bold">Sign in to your account</h2>
            <p className="text-sm leading-none text-gray-500">Enter your email below to sign in to your account</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="m@example.com" required type="email" />
            </div>
            <Button className="w-full">Send Magic Link</Button>
            <Button className="w-full" variant="outline">
              Sign in with Google
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}