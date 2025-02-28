import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    appointmentDate: {
        type: String,
        required: true
    },
    appointmentTime: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Cancelled'],
        default: 'Pending'
    },
    paymentType: {
        type: String,
        enum: ['Online', 'Cash'],
        default: 'Cash'
    },
    isPaid: {
        type: Boolean,
        default: false
    },
    transactionId: {
        type: String
    },
    appointmentId: {
        type: String,
        requried:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;
  
