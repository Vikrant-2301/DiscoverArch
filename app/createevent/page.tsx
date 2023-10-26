"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import getUserFromLocalStorage from "@/helpers/getDataFromLocalStorage";
import toast, { Toaster } from "react-hot-toast";

export default function CreateEvent() {
  const [event, setEvent] = useState({
    name: "",
    date: "",
    time: "",
    venue: "",
    ticketPrice: "",
  });

  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const user = getUserFromLocalStorage();
    if (!user || !user.isAdmin) {
      router.push("/");
    }
  }, [router]);

  const onEventCreate = async () => {
    try {
      setLoading(true);
      const user = getUserFromLocalStorage();
      if (!user || !user.isAdmin) {
        toast.error("Unauthorized");
        console.log("Unauthorized");
        router.push("/");
        return;
      }
      const response = await axios.post("/api/events/create", event);
      console.log(response);
      setLoading(false);
      router.push("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check if all event fields are filled before enabling the create button
    if (
      event.name.length > 0 &&
      event.date.length > 0 &&
      event.time.length > 0 &&
      event.venue.length > 0 &&
      event.ticketPrice.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [event]);

  return (
    <div className="flex flex-col items-center justify-center py-2 min-h-screen">
      <h1 className="mb-4 text-3xl">
        {loading ? "Processing" : "Create Event"}
      </h1>
      <hr />

      <div className="space-y-4">
        <div className="mb-4">
          <label htmlFor="name">Event Name</label>
          <input
            type="text"
            id="name"
            value={event.name}
            onChange={(e) => setEvent({ ...event, name: e.target.value })}
            className="p-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:border-gray-600"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={event.date}
            onChange={(e) => setEvent({ ...event, date: e.target.value })}
            className="p-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:border-gray-600"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time">Time</label>
          <input
            type="text"
            id="time"
            value={event.time}
            onChange={(e) => setEvent({ ...event, time: e.target.value })}
            className="p-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:border-gray-600"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="venue">Venue</label>
          <input
            type="text"
            id="venue"
            value={event.venue}
            onChange={(e) => setEvent({ ...event, venue: e.target.value })}
            className="p-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:border-gray-600"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ticketPrice">Ticket Price</label>
          <input
            type="text"
            id="ticketPrice"
            value={event.ticketPrice}
            onChange={(e) =>
              setEvent({ ...event, ticketPrice: e.target.value })
            }
            className="p-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:border-gray-600"
          />
        </div>
        <button
          className={`p-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:border-gray-600 ${
            buttonDisabled
              ? "bg-gray-200 text-gray-600 cursor-not-allowed"
              : "border border-gray-300 text-black focus:bg-gray-600 focus:outline-none hover:text-black"
          }`}
          onClick={onEventCreate}
          disabled={buttonDisabled}
        >
          Create Event
        </button>
        <Link href="/">Back to Home</Link>
      </div>
      <Toaster />
    </div>
  );
}
