import { Button } from "@/components/ui/button";
import Link from "next/link";

export const MobileRegisterButton = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
  <Link href={href} onClick={onClick}>
    <Button
      className='w-full text-md py-6 bg-gradient-to-r from-orange-500 to-orange-300 hover:from-orange-600 hover:to-orange-400 font-bold text-white cursor-pointer'
    >
      {children}
    </Button>
  </Link>
)