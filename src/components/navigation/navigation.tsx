"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Wrapper } from "../wrapper";
import { NavigationItem } from "./navigation-item";

import { Share2 } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const routes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex w-full h-[6rem] ">
      <Wrapper className="flex items-center space-x-4">
        
        <div className="flex items-center">
          <Link href="/">
            <Button
              className="bg-transparent hover:bg-transparent border border-black"
              size="logo"
            >
              <div className="flex items-center bg-primary w-full h-full px-2 rounded-l-md">
                <Share2 className="h-5 w-5 mr-2 text-white" />
              </div>

              <p className="font-bold text-sm text-black px-2">PaulyDev</p>
            </Button>
          </Link>
        </div>

        <div className="flex w-full">
          {routes.map((route) => (
            <NavigationItem
              key={route.href}
              label={route.label}
              href={route.href}
              isActive={pathname === route.href}
            />
          ))}
          <div className="flex items-center justify-end w-full space-x-4  px-4">
            <a href="#">
              <Image
                src="/linkedin.png"
                height={35}
                width={35}
                alt="Linkedin"
              />
            </a>
            <a href="#">
              <Image
                src="/facebook.png"
                height={35}
                width={35}
                alt="Facebook"
              />
            </a>
            <a href="#">
              <Image src="/github.png" height={35} width={35} alt="Github" />
            </a>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};
