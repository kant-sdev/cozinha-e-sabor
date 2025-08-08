import { Button } from "@/components/ui/button";
import Link from "next/link";

export const NavButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href}>
    <Button
      className="relative bg-none text-white transition-colors hover:text-orange-400  cursor-pointer font-bold "
    >
      {children}
    </Button>
  </Link>
)