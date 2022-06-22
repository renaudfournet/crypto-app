import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav class="flex w-screen navbar text-white-100 fixed top-0 z-50 h-16">
        <div class="flex flex-wrap flex-1 justify-between mx-16 opacity-100 font-bold items-center text-sm">
          <div>
            <Link to="/">
              <span className="tracking-wider">HOME &nbsp;</span>
            </Link>
          </div>

          <div>
            <ul>
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
