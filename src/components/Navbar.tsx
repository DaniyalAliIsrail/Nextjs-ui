'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href="/">
                    <MenuItem setActive={setActive} active={active} item="Home1" >
                        daniyal
                    </MenuItem>
                </Link>

                <Link href="/courses">
                    <MenuItem setActive={setActive} active={active} item="ourCourse" >
                        <div className="flex flex-col text-sm space-y-4">
                            <HoveredLink href="/courses">
                                Basic Music theory
                            </HoveredLink>
                            <HoveredLink href="/courses">
                                Advaanced composition
                            </HoveredLink>
                            <HoveredLink href="/courses">
                                Music production
                            </HoveredLink>
                            <HoveredLink href="/courses">
                                song writing
                            </HoveredLink>
                        </div>

                    </MenuItem>
                </Link>

                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact us">
                    </MenuItem>
                </Link>

            </Menu>
        </div>
    )
}
export default Navbar