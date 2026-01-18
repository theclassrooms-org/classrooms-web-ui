import { Card, CardBody } from "@heroui/react";
import { Bell, Calendar, Radio } from "lucide-react";

export function LeftWidgets() {
  return (
    <>
      <Card className="bg-default-50 border-none">
        <CardBody className="flex gap-3">
          <Bell size={20} />
          <div>
            <p className="font-medium">Announcements</p>
            <p className="text-sm text-default-500">
              No new announcements
            </p>
          </div>
        </CardBody>
      </Card>

      <Card className="bg-default-50 border-none">
        <CardBody className="flex gap-3">
          <Calendar size={20} />
          <div>
            <p className="font-medium">Upcoming</p>
            <p className="text-sm text-default-500">
              No deadlines this week
            </p>
          </div>
        </CardBody>
      </Card>

      <Card className="bg-default-50 border-none">
        <CardBody className="flex gap-3">
          <Radio size={20} className="text-danger" />
          <div>
            <p className="font-medium">Live</p>
            <p className="text-sm text-danger">
              No live session now
            </p>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
