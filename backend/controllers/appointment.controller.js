import Appointment from "../models/bookApointment.schema.js";

export const bookApointment = async (req, res) => {
    
    try {
        const { userId, doctorId, appointmentDate, appointmentTime, paymentType,transactionId,isPaid, appointmentId } = req.body;
        const newAppointment = new Appointment({
            userId,
            doctorId,
            appointmentDate,
            appointmentTime,
            paymentType,
            transactionId,
            appointmentId,
            isPaid
        });
        await newAppointment.save();
        res.status(201).json({ message: "Appointment booked successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json({appointments});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const updatedAppointment = await Appointment.findByIdAndUpdate
            ({ _id: id }, { status }, { new: true });
        
        res.status(200).json({success:true,updatedAppointment});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const getAppointmentById = async (req, res) => {
    try {
        const {id} = req.params;
        const appointment = await Appointment.find({ doctorId: id })
    .populate("userId");;
 
        
        if (!appointment) return res.status(400).json({ message: "No appointments found" });
      
        res.status(200).json({appointment});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getPateintAppointmentById = async (req, res) => { 
    try {
        const {id} = req.params;
        const appointment = await Appointment.find({ doctorId: id });
        
        if (!appointment) return res.status(400).json({ message: "No appointments found" });
      
        res.status(200).json({appointment});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getAppointmentByDoctorId = async (req, res) => {
    try {
        const { doctorId } = req.params;
        const appointment = await Appointment.find({ doctorId });
        
        if (!appointment) return res.status(400).json({ message: "No appointments found" });
      
        res.status(200).json({appointment});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();

        if(!appointments) return res.status(400).json({message:"No appointments found"});
        res.status(200).json({appointments});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}