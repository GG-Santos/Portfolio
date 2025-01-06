import app from "./app";
import env from "./util/validate";
import mongoose from "mongoose";

const PORT = env.PORT;

const startServer = async () => {
    try {
        // Connect to the MongoDB database
        await mongoose.connect(env.ATLAS_URI);
        console.log("Mongoose Connected to Portfolio Database");

        // Start the Express server
        app.listen(PORT, () => {
            console.log("Server running on port: " + PORT);
        });

        // Handle graceful shutdown
        const shutdown = async () => {
            console.log("Shutting down server...");
            await mongoose.connection.close();
            process.exit(0);
        };

        process.on("SIGINT", shutdown);
        process.on("SIGTERM", shutdown);

    } catch (error) {
        console.error("Error starting the server:", error);
        process.exit(1);
    }
};

startServer();