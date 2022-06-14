let header = "Make your Blog";
let online = "Online";
let learnMoreButton = "Learn More";

const MainBlock = () => {
  return (
    <div>
      <h1 className="text-6xl mb-8">
        {header}{" "}
        <span className="bg-cyan-400 p-1 rounded-tl-lg rounded-br-lg font-bold">
          {online}
        </span>{" "}
      </h1>
      <p className="w-2/6 text-xl mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <button className=" px-8 py-4 bg-cyan-600 text-3xl rounded-full font-light drop-shadow-2xl">
        {learnMoreButton}
      </button>
    </div>
  );
};

export default MainBlock;
