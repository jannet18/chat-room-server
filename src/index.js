import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
const PORT = app.listen(process.env.PORT || 7000, () => {
  console.log(`server is active on port ${7000}`);
});
