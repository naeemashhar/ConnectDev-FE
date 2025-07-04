
const Navbar = () => {
  return (
    <div className="navbar bg-base-200 shadow-md px-2">
        {/* Logo */}
        <div className="flex-1 cursor-pointer">
          <span className="text-2xl font-mono text-cyan-500">
            &lt;&#9679;&gt;
          </span>
          <a href="/" className="ml-2 text-2xl font-semibold text-white">
            Connect.<span className="text-cyan-500">dev</span>
          </a>
        </div>

        {/* Nav Links */}
        <div className="flex-none hidden lg:flex gap-5">
          {/* Theme toggle */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              data-toggle-theme="dark,light"
              data-act-class="ACTIVECLASS"
            />
            <svg
              className="swap-on fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64 17.66A9 9 0 0012 21a9 9 0 000-18 9 9 0 00-6.36 15.66z"></path>
            </svg>
            <svg
              className="swap-off fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a1 1 0 011 1v2a1 1 0 01-2 0V3a1 1 0 011-1zM4.22 4.22a1 1 0 011.42 0l1.42 1.42a1 1 0 01-1.42 1.42L4.22 5.64a1 1 0 010-1.42zM2 13a1 1 0 011-1h2a1 1 0 010 2H3a1 1 0 01-1-1zm1.22 7.78a1 1 0 001.42 0l1.42-1.42a1 1 0 10-1.42-1.42L3.64 19.36a1 1 0 000 1.42zM13 22a1 1 0 01-1-1v-2a1 1 0 012 0v2a1 1 0 01-1 1zm7.78-1.22a1 1 0 000-1.42l-1.42-1.42a1 1 0 10-1.42 1.42l1.42 1.42a1 1 0 001.42 0zM22 13a1 1 0 00-1-1h-2a1 1 0 000 2h2a1 1 0 001-1zm-1.22-7.78a1 1 0 00-1.42 0L17.94 6.36a1 1 0 001.42 1.42l1.42-1.42a1 1 0 000-1.42z"></path>
            </svg>
          </label>
          
          <a className="btn btn-ghost text-lg" href="/explore">
            Explore
          </a>
          <a className="btn btn-ghost text-lg" href="/connections">
            Connections
          </a>
          <a className="btn btn-ghost text-lg" href="/about">
            About
          </a>
        </div>

        {/* Right Side */}
        <div className="flex-none ml-2 ">
          {/* User / Login */}
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full ">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className=" p-2 shadow menu menu-md dropdown-content bg-base-200 rounded-box w-40"
            >
              <li>
                <a href="/profile">Profile</a>
              </li>
              <li>
                <a href="/settings">Request</a>
              </li>
               <li>
                <a href="/premium">Premium</a>
              </li>
              <li>
                <a href="/logout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Navbar
