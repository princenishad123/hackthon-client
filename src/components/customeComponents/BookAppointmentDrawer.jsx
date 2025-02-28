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
import { useSelector } from "react-redux";
import { useBookAppointmentMutation } from "@/rtkQuery/auth";
import toast from "react-hot-toast";

const BookAppointmentDrawer = ({ doctorId }) => {
  const { user } = useSelector((state) => state.auth);
  const [date, setDate] = useState();
  const [time, setTime] = useState(null);

  const [bookAppointment, { data, isLoading }] = useBookAppointmentMutation();
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

  const handleBookAppointment = async () => {
    const appointId = Math.floor(Math.random() * 90000000 + 10000000);
    const res = await bookAppointment({
      doctorId,
      userId: user?._id,
      appointmentDate: date,
      appointmentTime: time,
      transactionId: "",
      appointmentId: appointId,
    });

    if (res.data) return toast.success(res.data.message);
  };

  return (
    <div>
      <Drawer>
        <DrawerTrigger type="button" className="">
          <Button className="my-4 w-full"> Book an appointment</Button>
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
                <button
                  onClick={() => setTime(e)}
                  variant="outline"
                  className={`m-3 py-1 px-2 rounded-sm border ${
                    time === e ? "bg-black text-white " : ""
                  }`}
                  key={idx}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>

          <DrawerFooter>
            <Button onClick={handleBookAppointment}>Book</Button>
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
