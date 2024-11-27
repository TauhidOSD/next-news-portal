import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu"

const Navbar = () => {
  return (
    <header className="py-4 bg-white text-gray-900 shadow-md transition-colors duration-300">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8  ">
        {/* logo  */}
        <div className="text-xl font-bold">
          <Link href="/">Daily News</Link>
        </div>
        {/* desktop navigation */}

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex space-x-8">

            <NavigationMenuItem>
              <NavigationMenuLink href="/news" className="hover:text-gray-600">News</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="dark:bg-gray-900 dark:text-white">Item One</NavigationMenuTrigger>

              <NavigationMenuContent>
                <NavigationMenuLink>
                  <ul className="text-gray-600 shadow-md rounded-md py-4 px-5 space-y-2">
                      <li>
                      <NavigationMenuLink href="/services/web-development" className="hover:text-gray-600">
                       web Development
                      </NavigationMenuLink>

                      </li>
                  </ul>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>



          </NavigationMenuList>
        </NavigationMenu>


      </nav>

    </header>
  )
}

export default Navbar