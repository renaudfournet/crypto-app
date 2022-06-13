import { faFacebook, faInstagram, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <>
      <div className="bg-purple-200 text-white-100 mt-72 pb-20">
        <div className="pt-16">
          <p className="font-bold text-2xl">Like Our Service ? Subscribe Us</p>
        </div>
        <div className="pt-5 flex justify-center">
          <input
            class="block h-14 input-width text-xs pl-6 text-white-100 border placeholder-white-100 rounded-full  bg-pink-100"
            type="text"
            placeholder="Enter your email"
          />
          <div className="button-input cursor-pointer flex justify-center items-center mt-2 hover:bg-slate-300 focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
            <span type="button" className="text-black-100 text-xs">
              Subscribe
            </span>
          </div>
        </div>
        <hr className="mt-10 mx-10" />
        <div className="grid grid-cols-1  md:grid-cols-4 mt-10">
          <div>
            <div className="font-bold text-xl">Community</div>
            <div className="flex justify-center mt-4">
              <div className="mx-2 text-2xl">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className="mx-2 text-2xl">
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div className="mx-2 text-2xl">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="mx-2 text-2xl">
                <FontAwesomeIcon icon={faTwitch} />
              </div>
            </div>
          </div>
          <div>
            <div className="font-bold text-xl text-left ml-32">Company</div>
            <div className="flex flex-col justify-center text-xs mt-4 text-left">
              <div className="ml-32">About Us</div>
              <div className="ml-32">FAQ</div>
              <div className="ml-32">Blog</div>
            </div>
          </div>
          <div>
            <div className="font-bold text-xl text-left ml-32">Contact</div>
            <div className="flex flex-col justify-center text-xs mt-4 text-left">
              <div className="ml-32">About Us</div>
              <div className="ml-32">FAQ</div>
              <div className="ml-32">Blog</div>
            </div>
          </div>
          <div>
            <div className="font-bold text-xl text-left ml-32">Contact</div>
            <div className="flex flex-col justify-center text-xs mt-4 text-left">
              <div className="ml-32">About Us</div>
              <div className="ml-32">FAQ</div>
              <div className="ml-32">Blog</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
