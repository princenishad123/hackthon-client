import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Calendar } from "@/components/ui/calendar";

const BookAppointmentDrawer = () => {
  const [date, setDate] = useState();
  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
    "08:00 PM",
    "08:30 PM",
    "09:00 PM",
  ];

  console.log(date);
  return (
    <div>
      <Drawer>
        <DrawerTrigger className="">
          <Button className="my-4"> Book an appointment</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-center">
              Select your sutable Time and Data
            </DrawerTitle>
            <DrawerDescription className="text-center">
              This action cannot be undone.
            </DrawerDescription>
          </DrawerHeader>
          <div className="mx-auto flex sm:px-8">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />

            <div>
              {timeSlots.map((e, idx) => (
                <Button variant="outline" className="m-4" key={idx}>
                  {e}
                </Button>
              ))}
            </div>
          </div>
          <DrawerFooter>
            <Button>Book</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default BookAppointmentDrawer;
