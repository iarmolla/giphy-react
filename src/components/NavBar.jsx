import syncs from "../syncs/gifs";

function NavBar({ ...props }) {
  return (
    <>
      <nav className="border-gray-200 sm:gap-0 sm:p-5 m-5 rounded lg:w-3/6 ml-3 sm:w-3/4">
        <div className="container flex flex-wrap justify-around items-center mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/fr/a/a0/Giphy_logo.gif"
              className="mr-3 h-6 sm:h-9 "
              alt="Flowbite Logo"
            />
          </a>
          <div className="flex gap-7 items-center">            
            <div className="flex flex-row items-center w-max">
              <div className="w-max flex items-center bg-zinc-600 rounded-l-sm p-2">
                <box-icon name='user' type='solid' color='#fffefe'></box-icon>
              </div>              
              <button className="bg-zinc-700 rounded-r-sm px-5 sm:px-5 lg:px-20 py-2">Login</button>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-1 w-full mt-2">
          <input
            className="outline-0  text-left text-gray-900 text-sm rounded-sm w-full py-4 px-3 mt-2"
            placeholder="search..."
            onChange={(e) => {
              props.updateSearch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                syncs.getBySearch(props.search, props.updateGifs);
              }
            }}
          />
          <box-icon
            name="search"
            color="#fffafa"
            onClick={() => {
              syncs.getBySearch(props.search, props.updateGifs);
            }}
          ></box-icon>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
