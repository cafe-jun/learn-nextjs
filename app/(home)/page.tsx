import Movie from "@components/movie";
import { Metadata } from "next";
import styles from "@styles/home.module.css";
import { API_URL } from "../constant";

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
};

export const getMovies = async () => {
  const response = fetch(API_URL);
  return await response.then((data) => data.json());
};

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie: any) => {
        return (
          <Movie
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
          />
        );
      })}
    </div>
  );
}
