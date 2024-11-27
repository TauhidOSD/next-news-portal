import Link from "next/link"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <header className="py-4 bg-white text-gray-900 shadow-md transition-colors duration-300">Navbar
    <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8  ">
        {/* logo  */}
        <div className="text-xl font-bold">
            <Link href="/">Daily News</Link>
        </div>
        {/* desktop navigation */}
        <div>
        <Button variant="outline">Button</Button>

        </div>
    </nav>
    
    </header>
  )
}

export default Navbar