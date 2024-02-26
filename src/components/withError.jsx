import React from 'react'

/**
 *
 * @param {React.FC} Component
 * @returns anothor component
 */
export default function withError(Component) {
  return ({ error = '', ...rest }) => (
    <>
      <Component {...rest} />
      {error && <div className="text-red-700">{error}</div>}
    </>
  )
}
