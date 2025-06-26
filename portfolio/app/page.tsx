// pages/index.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to my website!</p>
      <Link href="/about">About Us</Link>
    </div>
  )
}