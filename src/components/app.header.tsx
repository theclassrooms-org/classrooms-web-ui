"use client"

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import NextLink from "next/link";
import CreateOrJoinClassDropdown from "./classroom.create-or-join";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link as={NextLink} href="/">
            <AcmeLogo />
            <p className="font-bold text-inherit">TheClassrooms</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link as={NextLink} href="/">
            <AcmeLogo />
            <p className="font-bold text-inherit">TheClassrooms</p>
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link as={NextLink} color="foreground" href="/classrooms">
            Classrooms
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <CreateOrJoinClassDropdown />
        <NavbarItem className="hidden lg:flex">
          <Link as={NextLink} href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={NextLink} color="primary" href="/signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            as={NextLink}
            className="w-full"
            color="foreground"
            href="/classrooms"
            size="lg"
          >
            Classrooms
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
