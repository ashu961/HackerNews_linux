import React, { useReducer, useEffect } from "react";
import Axios from "axios";
var i = 0;
var j = 0;
const initialState = {
  id: [],
  content: []
};
const reducer = (state, action) => {
  switch (action.type) {
    case "addContent":
      return { ...state, content: [...state.content, action.payload] };
    case "addId":
      return { ...state, id: action.payload };
    default:
      return state;
  }
};

function List4() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchTopStories = () => {
    Axios.get(
      `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
    )
      .then(res => (res = res.data))
      .then(res => {
        res.map(id => {
          if (i === 40) {
            return;
          }
          i++;
          Axios.get(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
          )
            // .then(content => (content = content.data))
            .then(content =>
              dispatch({ type: "addContent", payload: content })
            );
        });
      });
    //   .then(() => {
    //     const content = Axios.get(
    //       ` https://hacker-news.firebaseio.com/v0/item/2921983.json?print=pretty`
    //     ).then(content => dispatch({ type: "addContent", payload: content }));
    //   });
  };

  useEffect(() => {
    fetchTopStories();
    //fetchData();
  }, []);
  return (
    <div>
      <div>
        {console.log(state.content)}
        {/* {state.content.map(detail => console.log(detail.data))} */}
        <div>
          {state.content.map((detail, index) => (
            <li key={detail.data.id}>
              {index + 1}.{detail.data.title}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default List4;
