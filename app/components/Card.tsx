// components/Card.tsx
import Link from 'next/link';

interface CardProps {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    type: 'application' | 'model' ;  // New prop to determine the link type
  }

  const Card: React.FC<CardProps> = ({id, title, description, imageUrl, type}) => {
    const linkPath = type === 'application' ? `/applications/${id}` : `/models/${id}`;
    return (
        <Link href={linkPath}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={imageUrl} alt={title} />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 line-clamp-1">{title}</div>
                <p className="text-gray-700 text-base line-clamp-2">{description}</p>
                </div>
            </div>
        </Link>

    );
  };
  
  export default Card;
  