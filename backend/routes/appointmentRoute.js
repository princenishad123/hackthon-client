import express from "express";
import { isAuthenticated } from "../middlewares/isAuthecticated.js";
import { bookApointment, getAllAppointments, getAppointmentById, updateAppointment } from "../controllers/appointment.controller.js";

const appointmentRoute = express.Router();


appointmentRoute.route("/:id").get(isAuthenticated, getAppointmentById);
appointmentRoute.route("/book").post(isAuthenticated, bookApointment);
appointmentRoute.route('/update/:id').put(isAuthenticated, updateAppointment);
// appointmentRoute.route('/delete-appointment/:id').delete(isAuthenticated, deleteAppointment);
appointmentRoute.route('/all-appointments').get(isAuthenticated, getAllAppointments);


export default appointmentRoute;
