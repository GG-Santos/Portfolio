import app from "./app";
import env from "./util/validate";
import mongoose from "mongoose";

const PORT = env.PORT;

const startServer = async () => {
    try {
        await mongoose.connect(env.ATLAS_URI);
        console.log("Mongoose Connected!");

        app.listen(PORT!, () => {
            console.log("Server running on port: " + PORT);
        });
    } catch (error) {
        console.error(error);
    }
};

startServer();

