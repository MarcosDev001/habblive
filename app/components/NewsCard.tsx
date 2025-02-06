import Link from "next/link";

interface NewsCardProps {
  id: string;
  title: string;
  image: string;
  summary: string;
}

const NewsCard = ({ id, title, image, summary }: NewsCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p className="text-sm text-gray-600">{summary}</p>
      <Link
        href={`/noticias/${id}`}
        className="block mt-2 text-blue-500 font-semibold"
      >
        Ler mais
      </Link>
    </div>
  );
};

export default NewsCard;
