import axios from "axios";
import { createContext } from "react";
import UserReducer from "./UserReducer";
import { useReducer } from "react";

const token = localStorage.getItem("token") || "";

const initialState = {
    token: token,
    user: null,
  };
  
  const API_URL = "http://localhost:3000/users";
  
  export const UserContext = createContext(initialState);
  
  export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);
  
    const login = async (user) => {
      try {
        const res = await axios.post(API_URL + "/login", user);
        dispatch({
          type: "LOGIN",
          payload: res.data,
        });
  
        if (res.data) {
          localStorage.setItem("token", res.data.token);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    const getLoggedUserInfo = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(API_URL + "/id", {
          headers: {
            Authorization: token,
          },
        });
        dispatch({
          type:"GET_USER_INFO",
          payload:res.data
        })
      } catch (error) {
        console.error(error);
      }
    };
  
    const logout = async()=>{
      try {
          const token = localStorage.getItem("token")
          const res = await axios.delete(API_URL +"/logout",{
              headers:{
                  Authorization:token
              }
          })
          if(res.data){
              localStorage.removeItem("token")
              dispatch({
                  type:"LOGOUT"
              })
          }
  
      } catch (error) {
          console.error(error);
      }
    }
    return (
      <UserContext.Provider
        value={{
          token: state.token,
          user: state.user,
          login,
          getLoggedUserInfo,
          logout
        }}
      >
        {children}
      </UserContext.Provider>
    );
  };