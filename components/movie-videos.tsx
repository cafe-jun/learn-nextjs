import { API_URL } from "@/app/(home)/page";
import styles from "@styles/movie-videos.module.css";

async function getVideo(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideo({ id }: { id: string }) {
  const videos = await getVideo(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => {
        return (
          <iframe
            key={video.id}
            src={`https://youtube.com/embed/${video.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.name}
          />
        );
      })}
    </div>
  );
}
