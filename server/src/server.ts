import app from "./app";
import env from "./util/validate";
import mongoose from "mongoose";

const PORT = env.PORT;

mongoose.connect(env.ATLAS_URI)
    .then(() => {
        console.log("Mongoose Connected!");

        app.listen(PORT!, () => {
            console.log("Server running on port: " + PORT);
        });
    })
    .catch(console.error);

