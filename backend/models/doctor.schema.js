import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
 
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", required: true
    }, 

    name: {
        type: String, required: true
    },
    specialization: {
        type: String, 
        default:null
    },
    experience: {
        type: Number, 
        default:0
    }, // In years
    qualifications: {
        type: [String], 
        default:null
    },
    availability: {
        type: String, 
        default:"available"

    },
     // Example: ["09:00 AM", "10:00 AM"]
    consultationFee: {
        type: Number, 
        default:0
    },
  
    rating: {
        type: Number, default: 0
    },
    description: {
        type: String, 
        default:null
    },
  contact: {
      phone: {
          type: String, 
          default:null
      },
      email: {
          type: String,
      },
  },
    location: {
        type: String, 
        default:null
    },

});

const Doctor = mongoose.model("Doctor", doctorSchema);

export default  Doctor;