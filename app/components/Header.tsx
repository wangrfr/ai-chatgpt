// use client
// components/Header.tsx

import Link from 'next/link';


const Header: React.FC = () => {
    return (
      <header className="bg-gray-800 text-white">
        <nav className="container mx-auto flex justify-between p-4">
          <div className="text-lg font-bold">AI Explorer Hub</div>
          <ul className="flex space-x-4">
            <li>
               <Link href="/apps" className="hover:text-gray-300">
                Apps
               </Link>
            </li>
            <li>
                <Link href="/models" className="hover:text-gray-300">
                    Models
                </Link>
                </li>
            <li><a href="#" className="hover:text-gray-300">Datasets</a></li>
            <li><a href="#" className="hover:text-gray-300">Docs</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  