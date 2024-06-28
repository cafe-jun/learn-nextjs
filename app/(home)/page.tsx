import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export const getMovies = async () => {
  const response = fetch(API_URL);
  return await response.then((data) => data.json());
};

export default async function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const movies = await getMovies();

  return (
    <div>
      {movies.map((movie: any) => {
        return (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </div>
  );
}
