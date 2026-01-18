import { Card, CardBody, Avatar, Chip, Image } from "@heroui/react";

const classData = {
  id: "class-001",
  name: "Java Backend Fundamentals",
  subject: "Software Engineering",
  semester: "Spring 2026",
  classCode: "ABCD-EFGH",
  status: "ACTIVE",
  coverUrl:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  teacher: {
    id: "teacher-01",
    name: "Tran Khanh Duy",
    avatar:
      "https://i.pravatar.cc/150?img=12",
  },
};

export function ClassHeader() {
  const cls = classData;

  return (
    <div className="relative h-56 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: cls.coverUrl
            ? `url(${cls.coverUrl})`
            : undefined,
        }}
      />

      {/* Fallback background nếu không có ảnh */}
      {!cls.coverUrl && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600" />
      )}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6 gap-4 text-white">
        <div>
          <h1 className="text-2xl font-bold leading-tight">
            {cls.name}
          </h1>
          <p className="text-sm text-white/80">
            {cls.subject} · {cls.semester}
          </p>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          {/* Teacher */}
          <div className="flex items-center gap-2">
            <Avatar
              src={cls.teacher.avatar}
              size="sm"
              isBordered
            />
            <span className="text-sm font-medium">
              {cls.teacher.name}
            </span>
          </div>

          {/* Meta */}
          <div className="flex gap-2">
            <Chip size="sm" color="primary" variant="solid">
              Code: {cls.classCode}
            </Chip>
            <Chip size="sm" color="success" variant="solid">
              Active
            </Chip>
          </div>
        </div>
      </div>
    </div>
  );
}
