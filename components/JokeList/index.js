import useSWR from "swr";
import Link from "next/link";

export default function JokeList({ jokes }) {
  // const { data, isLoading } = useSWR("/api/jokes");

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  // if (!data) {
  //   return;
  // }

  return (
    <ul>
      {jokes.map((joke) => (
        <li key={joke.id}>
          <Link href={`/${joke.id}`}>{joke.joke}</Link>
        </li>
      ))}
    </ul>
  );
}
