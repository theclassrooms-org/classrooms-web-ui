"use client";

import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
} from "@heroui/react";
import Link from "next/link";

interface ClassroomCardProps {
  id: string;
  name: string;
  teacher: string;
  joinedAt: string;
  imageUrl: string;
}

export default function ClassroomCard({
  id,
  name,
  teacher,
  joinedAt,
  imageUrl,
}: ClassroomCardProps) {
  return (
    <Card shadow="sm" className="w-full">
      {/* Cover image */}
      <Image
        removeWrapper
        src={imageUrl}
        alt={name}
        className="h-40 w-full object-cover"
      />

      <CardBody className="gap-2">
        <h3 className="text-lg font-semibold">{name}</h3>

        <p className="text-sm text-default-500">
          Teacher: {teacher}
        </p>

        <p className="text-xs text-default-400">
          Joined at: {joinedAt}
        </p>
      </CardBody>

      <CardFooter>
        <Button
          as={Link}
          href={`/classrooms/${id}`}
          color="primary"
          variant="flat"
          size="sm"
        >
          Open classroom
        </Button>
      </CardFooter>
    </Card>
  );
}
