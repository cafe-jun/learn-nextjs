import { API_URL } from "@/app/(home)/page";
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

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  return (
    <div>
      <h2>Movie Detail Page</h2>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MovieVideo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
    </div>
  );
}
