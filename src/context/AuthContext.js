import React, { createContext, Component } from 'react';

export const AuthContext = createContext();

export default class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false,
  }

  toggleAuth = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          toggleAuth: this.toggleAuth,
          ...this.state,
        }}
      >
        { this.props.children }
      </AuthContext.Provider>
    )
  }
}