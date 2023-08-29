import JokeList from "../components/JokeList";

export default function HomePage({ jokes, handleAddJoke }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const joke = Object.fromEntries(formData);

    handleAddJoke(joke);
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="joke">add new joke</label>
        <input type="text" id="joke" name="joke" />
        <button>Submit</button>
      </form>
      <JokeList jokes={jokes} />
    </>
  );
}
