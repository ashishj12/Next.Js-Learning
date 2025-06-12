import { Card } from "@/app/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>Archived Notification</div>
      <div>
        <Link href="/dashboard">Default</Link>
      </div>
    </Card>
  );
}
