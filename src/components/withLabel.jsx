import React from 'react'

/**
 *
 * @param {React.FC} Component
 * @returns another component
 */
export default function withLabel(Component) {
  return ({ children, ...rest }) => (
    <>
      <label className="font-my">{children}</label>
      <Component {...rest} />
    </>
  )
}
