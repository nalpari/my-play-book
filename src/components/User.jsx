import React from 'react'

export default function User({ users, onClick }) {
  return (
    <>
      {users?.map((user) => (
        <div
          key={user.loginId}
          className="max-w-sm rounded overflow-hidden shadow-lg"
        >
          <div className="px-6 py-4">
            <div
              className="font-bold text-xl mb-2 cursor-pointer"
              data-id={user.id}
              onClick={(e) => onClick(e.target.dataset.id)}
            >
              {user.loginId}
            </div>
            <p className="text-gray-700 text-base">{user.name}</p>
          </div>
        </div>
      ))}
    </>
  )
}
