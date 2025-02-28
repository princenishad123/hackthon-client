import { Router } from "express";
import { loginController, signConroller,checkAuthController, logoutController, refreshTokenController } from "../controllers/auth.controller.js";
import {isAuthenticated} from "../middlewares/isAuthecticated.js"
import { doctorProfileController, getAllDoctors, getDoctorById, getDoctorBySpecialization, updateDoctorProfile } from "../controllers/profile.controler.js";
const authRoute = Router()

authRoute.route('/sign-up').post(signConroller);
authRoute.route('/login').post(loginController);
authRoute.route('/refresh-token').get(refreshTokenController);
authRoute.route('/check-auth').get(isAuthenticated, checkAuthController)
authRoute.route("/logout").get(isAuthenticated, logoutController)



// doctor route
authRoute.route("/doctor-profile").get(isAuthenticated, doctorProfileController)
authRoute.route('/update-doctor-profile').put(isAuthenticated, updateDoctorProfile)
authRoute.route("/all-doctors").get(getAllDoctors);
authRoute.route("/get-doctor/:id").get(getDoctorById);
authRoute.route("/get-doctors/:specialization").get(getDoctorBySpecialization);





export default authRoute;