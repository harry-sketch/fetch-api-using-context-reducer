import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const FetchContext = createContext();

const url = "https://jsonplaceholder.typicode.com/comments";

const FetchProvider = ({ children }) => {
  const initialState = {
    isLading: true,
    posts: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchApi = async (url) => {
    dispatch({
      type: "IS_LOADING",
    });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "FETCH_DATA",
        payload: {
          posts: data,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApi(url);
  }, []);

  return (
    <FetchContext.Provider value={{ ...state }}>
      {children}
    </FetchContext.Provider>
  );
};

export default FetchProvider;

export const useFetchHook = () => {
  return useContext(FetchContext);
};
