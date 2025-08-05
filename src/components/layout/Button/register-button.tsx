import { Button } from "@/components/ui/button";
import Link from "next/link";

export const RegisterButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href}>
    <Button
      className='bg-gradient-to-r from-orange-500 to-orange-300 hover:from-orange-600 hover:to-orange-400 font-bold text-white cursor-pointer rounded-xs'
    >
      {children}
    </Button>
  </Link>
)