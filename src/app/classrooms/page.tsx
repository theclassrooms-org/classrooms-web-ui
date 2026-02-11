"use client";

import ClassroomCard from "@/components/classroom.card";
import { GET_CLASSROOM_PAGE } from "@/graphql/queries/classroom-query";
import { ClassroomPageResponse } from "@/types/classroom.type";
import { useQuery } from "@apollo/client/react";
import {
  Input,
  Select,
  SelectItem,
  Pagination,
} from "@heroui/react";
import { useMemo, useState } from "react";

const sortOptions = [
  { key: "name,asc", label: "Name (A → Z)" },
  { key: "name,desc", label: "Name (Z → A)" },
  { key: "date-desc", label: "Newest joined" },
  { key: "date-asc", label: "Oldest joined" },
];

export default function ClassroomsPage() {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("date-desc");
  const [page, setPage] = useState(1);

  const { data, loading, error } = useQuery<ClassroomPageResponse>(
    GET_CLASSROOM_PAGE,
    {
      variables: {
        instructorId: "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
        pageable: {
          page: page - 1,
          size: 6,
          sorts: [sortKey]
        },
      },
      fetchPolicy: "cache-and-network",
    }
  );

  const classrooms =
    data?.getClassroomPageByInstructorId.content ?? [];

  const pageInfo =
    data?.getClassroomPageByInstructorId.pageInfo;

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
      {classrooms.length === 0 ? (
        <div className="py-16 text-center text-default-500">
          No classrooms found.
        </div>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {classrooms.map((classroom, index) => (
              <ClassroomCard
                key={classroom.id + index}
                classroom={classroom}
              />
            ))}
          </div>

          {pageInfo && (
              <Pagination
                className="pt-12"
                page={page}
                total={pageInfo.totalPages}
                onChange={setPage}
              />
          )}
        </>
      )}
    </div>
  );
}
