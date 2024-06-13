import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

type Props = {
  label: string;
  href: string;
  isActive?: boolean;
};

export const NavigationItem = ({ label, href, isActive }: Props) => {
  return (
    <div className="flex items-center px-4 bg-white">
      <Link
        href={href}
        className={cn(
          "font-semibold text-lg",
          isActive &&
            buttonVariants({
              size: "sm",
              variant: "default",
              className: "font-semibold text-lg",
            })
        )}
      >
        {label}
      </Link>
    </div>
  );
};
