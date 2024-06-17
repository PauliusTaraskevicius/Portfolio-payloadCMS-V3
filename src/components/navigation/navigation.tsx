"use client";

import { useState } from "react";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import { useMedia } from "react-use";
import { Share2 } from "lucide-react";
import { Menu } from "lucide-react";

import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Wrapper } from "../wrapper";
import { NavigationItem } from "./navigation-item";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();
  const router = useRouter();

  const isMobile = useMedia("(max-width: 1024px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="w-full p-3">
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              size="sm"
              className="font-normal border-none"
            >
              <Menu className="w-8 h-8" />
            </Button>
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
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={route.href === pathname ? "default" : "outline"}
                onClick={() => onClick(route.href)}
                className="w-full justify-start"
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden lg:flex sticky inset-x-0 top-0 w-full h-[6rem] backdrop-blur-lg transition-all">
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
          <div className="flex items-center justify-end w-full space-x-4 px-4">
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
