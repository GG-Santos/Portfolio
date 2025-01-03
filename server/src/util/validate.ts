import { cleanEnv, port, str } from "envalid";

export default cleanEnv(process.env, {
    ATLAS_URI: str(),
    PORT: port(),
});