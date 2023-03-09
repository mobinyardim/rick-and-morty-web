import mongoose from "mongoose";
import app from "./App";
import env from "./utils/Env";

mongoose.set("strictQuery", false);
mongoose
  .connect(env.DATABASE_URL)
  .then(() => {
    console.log("database connected");
    app.listen(env.PORT, () => {
      console.log(`server is running on port: ${env.PORT}`);
    });
  })
  .catch(console.error);
