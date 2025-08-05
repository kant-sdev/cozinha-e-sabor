import Link from "next/link";

export const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="relative text-white transition-colors hover:text-orange-400 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-orange-500 before:to-orange-300 before:transition-all before:duration-300 hover:before:w-full"
  >
    {children}
  </Link>
)