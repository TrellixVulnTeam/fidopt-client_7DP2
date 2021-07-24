const Header = () => {
  return (
    <div>
      <h1
        style={{ background: "linear-gradient(to bottom, #a8c0ff, #4338CA)" }}
        className="text-center h-32 text-white font-caveat text-7xl pt-4"
      >
        FIDOPT
      </h1>
      <div className="px-2 flex flex-col items-center justify-center pt-5 lg:pt-0">
        <img
          className="w-32 h-32"
          id="logo"
          alt=""
          src="https://pupuphooray.com/wp-content/uploads/2019/03/dog-icon.png"
        />
      </div>
    </div>
  );
};

export default Header;
