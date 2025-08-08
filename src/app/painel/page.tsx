// app/painel/layout.tsx

import { LogoutButton } from "@/components/layout/Button/logout-button"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Meu Painel</h1>
          <LogoutButton />
        </div>
      </header>
    </div>
  )
}