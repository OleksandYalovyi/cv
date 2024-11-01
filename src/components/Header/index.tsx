"use client";
import Link from "next/link";
import routes from "@/constants/routes";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="px-52 py-8 flex place-content-between bg-main text-white">
      <Link href={routes.home} className="font-semibold text-4xl">
        Oleksandr Yalovyi
      </Link>
      <div className="flex gap-2">
        <Link
          href={routes.home}
          className="border-b-2 border-transparent hover:border-white"
        >
          Main
        </Link>
        <Link
          href={routes.contact}
          className="border-b-2 border-transparent hover:border-white"
        >
          Contact
        </Link>
        <Link
          href={routes.projects}
          className="border-b-2 border-transparent hover:border-white"
        >
          Projects
        </Link>
      </div>
    </header>
  );
}
