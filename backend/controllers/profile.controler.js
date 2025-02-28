import Doctor from "../models/doctor.schema.js";
import User from "../models/user.schema.js";
export const doctorProfileController = async (req, res) => {
    try {
        const { _id } = req.user;

        const profile = await Doctor.findOne({ userId: _id })
        
        if (!profile) return res.status(200).json({ message: "doctor not exist" });

        return res.status(200).json(profile)
        
    } catch (error) {
        return res.status(500).json(error)
    }
}


export const updateDoctorProfile = async (req,res) => {
    try {
        const { _id } = req.user;
        const { specialization, experience, qualifications, availability, consultationFee, contact, location,description } = req.body;
        const profile = await Doctor.findOne({ userId: _id })
        if (!profile) return res.status(400).json({ message: "doctor not exist" });

        
        profile.specialization = specialization;
        profile.experience = experience;
        profile.qualifications = qualifications;
        profile.availability = availability;
        profile.consultationFee = consultationFee;
        profile.contact = contact;
        profile.location = location;    
        profile.description = description
        const newProfile = await profile.save();
        return res.status(200).json({ message: "Profile updated successfully", newProfile });

    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getAllDoctors = async (req, res) => {
    try {
        const { limit = 10, skip = 0 } = req.query;
        // const doctors = await Doctor.find()
        //     .skip(parseInt(skip))
        //     .limit(parseInt(limit))
            // .populate('userId', 'name email'); // Assuming 'userId' is the reference field in Doctor schema
        const doctors = await Doctor.find().skip(parseInt(skip)).limit(parseInt(limit));
        if(!doctors) return res.status(400).json({message: "No doctors found"});
        return res.status(200).json(doctors);
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getDoctorById = async (req, res) => { 
    try {
        const { id } = req.params;
        const doctor = await Doctor.findById(id);
        if (!doctor) return res.status(400).json({ message: "Doctor not found" });  
        return res.status(200).json(doctor);
        
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getDoctorBySpecialization = async (req, res) => { 
    try {
        const { specialization } = req.params;
        const doctors = await Doctor.find({ specialization });
        if (!doctors) return res.status(400).json({ message: "Doctor not found" });  
        return res.status(200).json(doctors);
        
    } catch (error) {
        return res.status(500).json(error)
    }
}