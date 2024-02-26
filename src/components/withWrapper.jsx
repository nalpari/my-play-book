const withWrapper = (WrappedComponent, props = {}) => {
  return <WrappedComponent {...props} />
}

export default withWrapper
