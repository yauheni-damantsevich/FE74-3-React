import React from 'react'
const allPosts = 'All Posts'
const myPosts = 'My Posts'
const addPosts = 'Add Posts'
const logOut = 'Log Out'

export const Menu = () => {
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
  )
}
