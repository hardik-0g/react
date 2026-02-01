import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarDemo() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="p-4 border rounded-lg w-fit">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md"
        captionLayout="dropdown"
      />

      <p className="mt-3 text-sm text-gray-600">
        Selected date: {date?.toDateString()}
      </p>
    </div>
  );
}
