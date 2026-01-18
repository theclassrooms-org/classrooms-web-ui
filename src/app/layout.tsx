import './globals.css'
import "swiper/css";
import "swiper/css/pagination";
import { Inter } from 'next/font/google'
import { HeroUIProvider } from "@heroui/react"
import AppHeader from '@/components/app.header'
import AppFooter from '@/components/app.footer'
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: "The Classrooms",
    template: "%s | The Classrooms",
  },
  description:
    "The Classrooms is a modern platform for managing classrooms, courses, and collaboration between educators and students.",

  applicationName: "The Classrooms",

  keywords: [
    "classroom",
    "education",
    "online learning",
    "teachers",
    "students",
    "learning platform",
  ],

  authors: [{ name: "The Classrooms Team" }],

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    type: "website",
    siteName: "The Classrooms",
    title: "The Classrooms",
    description:
      "A modern classroom platform for educators and students.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "The Classrooms Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "The Classrooms",
    description:
      "A modern classroom platform for educators and students.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <HeroUIProvider>
          <div className="min-h-screen flex flex-col">
            <AppHeader />
            <div className="flex-1">
              {children}
            </div>
            <AppFooter />
          </div>
        </HeroUIProvider>
      </body>
    </html>
  )
}
