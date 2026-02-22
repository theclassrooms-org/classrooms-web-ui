"use client";

import { Classroom } from "@/types/classroom.type";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
} from "@heroui/react";
import Link from "next/link";

interface ClassroomCardProps {
  classroom: Classroom;
}

export default function ClassroomCard({
  classroom,
}: ClassroomCardProps) {
  return (
    <Card shadow="sm" className="w-full">
      {/* Cover image */}
      <Image
        removeWrapper
        src={classroom.thumbnailUrl || classroom.bannerUrl}
        alt={classroom.name}
        className="h-40 w-full object-cover"
      />

      <CardBody className="gap-2">
        <h3 className="text-lg font-semibold">
          {classroom.name}
        </h3>

        <p className="text-sm text-default-500">
          Instructor: {classroom.instructor.name}
        </p>

        <p className="text-xs text-default-400">
          Code: {classroom.classCode}
        </p>

        <p className="text-xs text-default-400">
          Status: {classroom.status}
        </p>
      </CardBody>

      <CardFooter>
        <Button
          as={Link}
          href={`/classrooms/${classroom.id}/stream`}
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
