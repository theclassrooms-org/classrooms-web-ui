"use client";

import { ClassHeader } from "@/components/classrooms/class.header";
import {
  Tabs,
  Tab,
} from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";
import { use } from "react";

export default function ClassroomLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ classroomId: string }>
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { classroomId } = use(params);

  const basePath = `/classrooms/${classroomId}`;

  const tabs = [
    { key: "stream", label: "Stream" },
    { key: "classwork", label: "Classwork" },
    { key: "people", label: "People" },
    { key: "grades", label: "Grades" },
  ];

  const activeKey =
    tabs.find((t) => pathname.includes(t.key))?.key ?? "stream";

  return (
    <div className="flex flex-col gap-6">
      <ClassHeader />

      {/* TABS */}
      <div className="px-4 overflow-x-auto">
        <Tabs
          selectedKey={activeKey}
          onSelectionChange={(key) => {
            router.push(`${basePath}/${key}`);
          }}
          variant="underlined"
          size="lg"
          classNames={{
            tabList:
              "gap-8 min-w-max flex-nowrap",
            cursor: "bg-primary",
            tabContent:
              "group-data-[selected=true]:text-primary font-medium whitespace-nowrap",
          }}
        >
          {tabs.map((tab) => (
            <Tab key={tab.key} title={tab.label} />
          ))}
        </Tabs>
      </div>

      {/* CONTENT */}
      <div className="bg-default-50 min-h-[60vh] px-4 py-8">
        {children}
      </div>
    </div>
  );
}
