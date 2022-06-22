import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav class=" bg-navbar  text-white-100 fixed w-full top-0 z-50 h-16 px-2 sm:px-4 flex align-middle">
        <div class="opacity-100 container flex flex-wrap justify-between items-center mx-auto">
          <div>
            <Link to="/">Home</Link>
          </div>

          <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link to="crypto">Cryptocurrencies</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
