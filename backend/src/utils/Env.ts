import "dotenv/config";
import {cleanEnv, port, str} from "envalid";

export default cleanEnv(process.env, {
    DATABASE_URL: str(),
    PORT: port()
});