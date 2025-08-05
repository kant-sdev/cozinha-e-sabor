import Link from "next/link";

export const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-white text-lg py-2 px-4 rounded-md hover:bg-stone-700 transition-colors"
  >
    {children}
  </Link>
)
