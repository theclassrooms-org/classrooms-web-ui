"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { Plus, Users, SquarePlus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CreateOrJoinClassDropdown() {
  const router = useRouter();

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Button
          isIconOnly
          variant="light"
          radius="full"
          aria-label="Create or join class"
        >
          <Plus size={20} />
        </Button>
      </DropdownTrigger>

      <DropdownMenu aria-label="Class actions">
        <DropdownItem
          key="join"
          startContent={<Users size={18} />}
          description="Join a class using a code"
          onPress={() => router.push("/classrooms/join")}
        >
          Join class
        </DropdownItem>

        <DropdownItem
          key="create"
          startContent={<SquarePlus size={18} />}
          description="Create a new classroom"
          onPress={() => router.push("/classrooms/create")}
        >
          Create class
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
