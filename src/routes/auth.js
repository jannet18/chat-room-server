import { Router } from "express";

const router = Router();

router.post("/registerUser", async (req, res) => {
  const { username, name, image } = req.body;

  if (!username || !name) {
    return res.status(400).json({ message: "Field is required" });
  }

  const newUser = {
    id: username,
    role: "user",
    name,
    image,
  };
  const user = client.upsertUsers({
    users: {
      [username]: newUser.id,
    },
  });

  const expiry = Math.floor(Date.now() / 1000) + 24 * 60 * 60;
  const token = client.createToken(username, expiry);
  return res.status(200).json({ token, username, name });
});

export default router;
