// src/components/layout/Layout.tsx
import { useState } from "react"
import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Sidebar } from "./Sidebar"

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar 
        open={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      <div className="flex-1 md:pl-60">
        <main className="container py-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}