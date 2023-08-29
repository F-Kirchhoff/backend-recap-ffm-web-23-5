import Joke from "@/db/models/Joke.js";
import dbConnect from "@/db/connect.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const jokes = await Joke.find();

    response.json(jokes);
    return;
  }

  response.status(405).json({ status: "Method not allowed" });
}
