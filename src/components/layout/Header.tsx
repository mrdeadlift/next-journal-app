import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Settings } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  return (
    <Card className="bg-background border-none shadow-none">
      <CardContent className="py-4 flex justify-between items-center">
        <div className="w-24">{/* 左側の空きスペース */}</div>

        <div>
          <h1 className="newspaper-title">Daily Journal</h1>
          <p className="text-center text-muted-foreground mt-1 italic text-sm">
            {new Date().toLocaleDateString('ja-JP', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        <div className="w-24 flex items-center justify-end space-x-2">
          <Button variant="ghost" size="icon" className="hover:bg-secondary">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-secondary">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in" className="text-primary">
                Sign In
              </Link>
            </SignedOut>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default Header
