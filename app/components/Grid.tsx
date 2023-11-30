// components/Grid.tsx

import Card from './Card';

interface GridProps {
  items: Array<{ id: number; title: string; description: string; imageUrl: string; type: 'application' | 'model'; }>;
}

const Grid: React.FC<GridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col hover:shadow-lg hover:scale-105 transition-transform">
          <Card {...item} />
        </div>
      ))}
    </div>
  );
};

export default Grid;
