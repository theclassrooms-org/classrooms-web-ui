import { Card, CardBody, Avatar, Button } from "@heroui/react";

const members = [
  { name: "Tran Khanh Duy", avatar: "https://i.pravatar.cc/100?img=12" },
  { name: "Student A" },
  { name: "Student B" },
];

export function RightMembers() {
  return (
    <Card className="border-none bg-default-50">
      <CardBody className="gap-4">
        <div className="flex justify-between items-center">
          <p className="font-medium">Members</p>
          <Button size="sm" variant="flat" color="primary">
            Invite
          </Button>
        </div>

        <div className="space-y-3">
          {members.map((m) => (
            <div key={m.name} className="flex items-center gap-3">
              <Avatar size="sm" src={m.avatar} />
              <span className="text-sm">{m.name}</span>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
