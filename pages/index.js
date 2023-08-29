import JokeList from "../components/JokeList";
import useSWR from "swr";

export default function HomePage() {
  const { mutate } = useSWR("/api/jokes");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const joke = Object.fromEntries(formData);

    const response = await fetch("/api/jokes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(joke),
    });

    if (response.ok) {
      mutate();
    }
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="joke">add new joke</label>
        <input type="text" id="joke" name="joke" />
        <button>Submit</button>
      </form>
      <JokeList />
    </>
  );
}
