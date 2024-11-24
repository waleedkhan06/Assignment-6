import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  return (
    <header className="w-full bg-gray-50">
      
      <div className="hidden md:block bg-gray-50 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          
          <div className="flex space-x-6 text-gray-600">
            <div>Phone: 956 742 455 678</div>
            <div>|</div>
            <div>Email: info@ddsgpr.com</div>
          </div>

         
          <div className="flex space-x-4">
            <img src="/Facebook.png" alt="Facebook" className="w-5 h-5" />
            <img src="/Instagram.png" alt="Instagram" className="w-5 h-5" />
            <img src="/Twitter.png" alt="Twitter" className="w-5 h-5" />
            <img src="/Linkedin.png" alt="LinkedIn" className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* line */}
      <hr className="border-black border-t-2" />

    
      <div className="container mx-auto px-4 bg-gray-50">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/Ddsgnr Library.png" alt="Logo" width={100} height={40} />
          </Link>

         
         
          <nav className="hidden md:flex flex-grow justify-center space-x-6 bg-white">
            <span className="text-black hover:text-gray-600 hover:underline cursor-pointer">Home</span>
            <span className="text-black hover:text-gray-600 hover:underline cursor-pointer">Courses</span>
            <span className="text-black hover:text-gray-600 hover:underline cursor-pointer">Services</span>
            <span className="text-black hover:text-gray-600 hover:underline cursor-pointer">Achievement</span>
            <span className="text-black hover:text-gray-600 hover:underline cursor-pointer">About Us</span>
            <span className="text-black hover:text-gray-600 hover:underline cursor-pointer">Testimonial</span>
          </nav>

         
         
          <div className="hidden md:flex space-x-4">
            <button className="bg-white text-black border border-black px-4 py-2 rounded">
              Login
            </button>
            <button className="bg-black text-white border border-black px-4 py-2 rounded">
              Sign Up
            </button>
          </div>

          
          
          <button className="md:hidden">
            <GiHamburgerMenu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {/* line */}
      <hr className="border-black border-t-2" />
    </header>
  );
}




