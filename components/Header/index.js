import useSWR from "swr";

export default function Header() {
  const { data } = useSWR("/api/jokes");

  const count = data?.length; // optional chaining - does automatically return undefined and does not check the .length key if data is not an object

  return <h1>There are {count} jokes in the database</h1>;
}
