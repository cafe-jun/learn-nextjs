export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>movie Page {id}</h1>
    </div>
  );
}
