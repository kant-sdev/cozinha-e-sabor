import { Button } from "@/components/ui/button";
import Link from "next/link";

export const MobileNavButton = ({ href, children, onClick, classname}: { href: string; children: React.ReactNode; classname?: string, onClick: () => void }) => (
  <Link href={href} onClick={onClick}>
    <Button
      className={`${classname} w-full text-white border border-orange-400 hover:bg-stone-700 font-bold text-md py-6`}
    >
      {children}
    </Button>
  </Link>
)