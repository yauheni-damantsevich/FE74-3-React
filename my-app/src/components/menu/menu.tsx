let allPosts = "All Posts";
let myPosts = "My Posts";
let addPosts = "Add Posts";
let logOut = "Log Out";

const Menu = () => {
  return (
    <div className="flex bg-white rounded-tl-lg rounded-br-lg p-4 drop-shadow-xl gap-8">
      <div className="flex gap-8">
        <ul className="min-w-max font-normal">
          <li>{allPosts}</li>
        </ul>
        <ul className="min-w-max">
          <li className="mb-6">{myPosts}</li>
          <li>{addPosts}</li>
        </ul>
      </div>
      <div>
        <ul className="min-w-max">
          <li>{logOut}</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
