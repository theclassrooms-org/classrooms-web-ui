"use client";

import ClassroomCard from "@/components/classroom.card";
import {
  Input,
  Select,
  SelectItem,
  Pagination,
} from "@heroui/react";
import { useMemo, useState } from "react";

const PAGE_SIZE = 6;

const mockClassrooms = [
  {
    id: "1",
    name: "Java Spring Boot Basics",
    teacher: "Nguyen Van A",
    joinedAt: "2024-12-01",
    imageUrl: "https://picsum.photos/400/200?1",
  },
  {
    id: "2",
    name: "System Design for Backend",
    teacher: "Tran Thi B",
    joinedAt: "2024-12-10",
    imageUrl: "https://picsum.photos/400/200?2",
  },
  {
    id: "3",
    name: "AWS for Developers",
    teacher: "Le Van C",
    joinedAt: "2025-01-05",
    imageUrl: "https://picsum.photos/400/200?3",
  },
  {
    id: "4",
    name: "Microservices Architecture",
    teacher: "Pham Van D",
    joinedAt: "2024-11-20",
    imageUrl: "https://picsum.photos/400/200?4",
  },
  {
    id: "5",
    name: "PostgreSQL Deep Dive",
    teacher: "Nguyen Van E",
    joinedAt: "2024-10-15",
    imageUrl: "https://picsum.photos/400/200?5",
  },
  {
    id: "6",
    name: "Docker & Kubernetes",
    teacher: "Tran Thi F",
    joinedAt: "2025-01-01",
    imageUrl: "https://picsum.photos/400/200?6",
  },
  {
    id: "7",
    name: "Clean Code in Java",
    teacher: "Le Van G",
    joinedAt: "2024-09-01",
    imageUrl: "https://picsum.photos/400/200?7",
  },
];

const sortOptions = [
  { key: "name-asc", label: "Name (A → Z)" },
  { key: "name-desc", label: "Name (Z → A)" },
  { key: "date-desc", label: "Newest joined" },
  { key: "date-asc", label: "Oldest joined" },
];

export default function ClassroomsPage() {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("date-desc");
  const [page, setPage] = useState(1);

  /**
   * 1️⃣ Filter + Sort
   */
  const processedClassrooms = useMemo(() => {
    let data = [...mockClassrooms];

    // Search
    if (search.trim()) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sort
    switch (sortKey) {
      case "name-asc":
        data.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        data.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "date-asc":
        data.sort(
          (a, b) =>
            new Date(a.joinedAt).getTime() -
            new Date(b.joinedAt).getTime()
        );
        break;
      case "date-desc":
      default:
        data.sort(
          (a, b) =>
            new Date(b.joinedAt).getTime() -
            new Date(a.joinedAt).getTime()
        );
    }

    return data;
  }, [search, sortKey]);

  /**
   * 2️⃣ Pagination
   */
  const totalPages = Math.ceil(
    processedClassrooms.length / PAGE_SIZE
  );

  const pagedClassrooms = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return processedClassrooms.slice(
      start,
      start + PAGE_SIZE
    );
  }, [page, processedClassrooms]);

  // Reset page when search / sort changes
  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleSortChange = (key: string) => {
    setSortKey(key);
    setPage(1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold">My Classrooms</h1>
          <p className="text-default-500">
            Classrooms you have joined or created
          </p>
        </div>

        <div className="flex gap-3">
          {/* Search */}
          <Input
            value={search}
            onChange={(e) =>
              handleSearchChange(e.target.value)
            }
            placeholder="Search classroom..."
            size="sm"
            className="w-56"
          />

          {/* Sort */}
          <Select
            selectedKeys={[sortKey]}
            size="sm"
            className="w-48"
            onSelectionChange={(keys) =>
              handleSortChange(Array.from(keys)[0] as string)
            }
          >
            {sortOptions.map((opt) => (
              <SelectItem key={opt.key}>
                {opt.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>

      {/* Grid */}
      {pagedClassrooms.length === 0 ? (
        <div className="py-16 text-center text-default-500">
          No classrooms found.
        </div>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pagedClassrooms.map((classroom) => (
              <ClassroomCard
                key={classroom.id}
                {...classroom}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <Pagination
                page={page}
                total={totalPages}
                onChange={setPage}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
