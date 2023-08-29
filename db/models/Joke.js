import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema({
  joke: String,
});

const Joke = mongoose.models.Joke || mongoose.model("Joke", jokeSchema);

export default Joke;
