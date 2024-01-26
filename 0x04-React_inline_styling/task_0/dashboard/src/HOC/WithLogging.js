// WithLogging.js

import React, { Component } from "react";

const WithLogging = (WrappedComponent) => {
  class WithLoggingComponent extends Component {
    componentDidMount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`);
    }

    componentWillUnmount() {
      console.log(
        `Component ${getDisplayName(WrappedComponent)} is going to unmount`
      );
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const getDisplayName = (WrappedComponent) =>
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  WithLoggingComponent.displayName = `WithLogging(${getDisplayName(
    WrappedComponent
  )})`;

  return WithLoggingComponent;
};

export default WithLogging;
