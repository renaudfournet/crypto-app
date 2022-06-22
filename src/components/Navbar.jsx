import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav class="navbar text-white-100 fixed w-full top-0 z-50 h-16 px-2 sm:px-4 flex align-middle">
        <div class="mx-16 opacity-100 font-bold container flex flex-wrap justify-between items-center text-sm">
          <div>
            <Link to="/">
              <span className="tracking-wider">HOME</span>
            </Link>
          </div>

          <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul class="flex flex-col  md:flex-row">
              <li>
                <Link to="crypto">
                  <span className="tracking-wider">CRYPTOCURRENCIES</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
