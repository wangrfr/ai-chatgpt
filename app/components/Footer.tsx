// components/Footer.tsx

const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-800 text-white text-center p-4">
        <div className="container mx-auto">
          © {new Date().getFullYear()} AI Explorer Hub. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  