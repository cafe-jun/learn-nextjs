import { API_URL } from "@/app/constant";
import MovieInfo from "@/components/movie-info";
import MovieVideo from "@/components/movie-videos";
import { Suspense } from "react";

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
    description: movie.overview,
  };
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}
