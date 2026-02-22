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
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@heroui/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import CreateOrJoinClassDropdown from "./classroom.create-or-join";
import { SearchIcon, User, Settings, LogOut } from "lucide-react";
import { useUser } from "@/hooks/useUser";

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
  const { user, isAuthenticated, clearUser } = useUser();
  const router = useRouter();

  const handleLogout = () => {
    clearUser();
    router.push("/login");
  };

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link as={NextLink} href="/">
            <AcmeLogo />
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
          <Input
            size="sm"
            placeholder="Search classrooms..."
            startContent={
              <SearchIcon className="text-default-400" size={16} />
            }
            classNames={{
              inputWrapper: "bg-default-100",
            }}
          />
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} color="foreground" href="/classrooms">
            My Classes
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <CreateOrJoinClassDropdown />
        {isAuthenticated && user ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button
                variant="flat"
                className="gap-2 min-w-0 px-2"
                aria-label="User menu"
              >
                {user?.avatar && <Avatar
                    src={user?.avatar}
                    name={user.name}
                    size="sm"
                    className="flex-shrink-0"
                />}
                <span className="hidden sm:inline truncate max-w-[120px]">
                  {user.name || user.username}
                </span>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="User menu">
              <DropdownItem
                key="profile"
                startContent={<User size={18} />}
                onPress={() => router.push("/profile")}
              >
                Profile
              </DropdownItem>
              <DropdownItem
                key="settings"
                startContent={<Settings size={18} />}
                onPress={() => router.push("/settings")}
              >
                Settings
              </DropdownItem>
              <DropdownItem
                key="logout"
                startContent={<LogOut size={18} />}
                color="danger"
                onPress={handleLogout}
              >
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link as={NextLink} href="/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={NextLink} color="primary" href="/signup" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
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
