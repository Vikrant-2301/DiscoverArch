import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide an event name"],
  },
  date: {
    type: Date,
    required: [true, "Please provide an event date"],
  },
  time: {
    type: String,
    required: [true, "Please provide an event time"],
  },
  venue: {
    type: String,
    required: [true, "Please provide an event venue"],
  },
  ticketPrice: {
    type: Number,
    required: [true, "Please provide a ticket price"],
  },
  attendees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;
