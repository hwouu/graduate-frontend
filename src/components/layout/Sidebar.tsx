// src/components/layout/Sidebar.tsx
import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

const navigation = [
  {
    name: "대시보드",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "강좌 관리",
    href: "/courses",
    icon: BookOpen,
  },
  {
    name: "학점 관리",
    href: "/credits",
    icon: GraduationCap,
  },
  {
    name: "졸업 요건",
    href: "/graduation",
    icon: Award,
  },
]

interface SidebarProps {
  open?: boolean
  onClose?: () => void
}

interface SidebarLinksProps {
  className?: string
}

function SidebarLinks({ className }: SidebarLinksProps) {
  return (
    <div className={cn("space-y-1", className)}>
      {navigation.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            cn(
              "flex items-center gap-x-2 rounded-lg px-3 py-2 text-sm font-medium",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              className
            )
          }
        >
          <item.icon className="h-4 w-4" />
          {item.name}
        </NavLink>
      ))}
    </div>
  )
}

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden border-r bg-background md:fixed md:inset-y-0 md:flex md:w-60 md:flex-col">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">네비게이션</h2>
            <SidebarLinks />
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      <Sheet open={open} onOpenChange={onClose}>
        <SheetContent side="left" className="w-60 p-0">
          <SheetHeader className="p-4">
            <SheetTitle>네비게이션</SheetTitle>
          </SheetHeader>
          <Separator />
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <SidebarLinks />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}