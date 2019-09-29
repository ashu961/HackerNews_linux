import React, { useReducer, useEffect } from "react";
import Axios from "axios";
var i = 0;
var url = "";
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
const trimUrl = x => {
  x = x.replace("https://", "");
  x = x.replace("http://", "");
  var ind = x.indexOf("/");
  x = x.slice(0, ind);
  return x;
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
          if (i === 9) {
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
  };

  useEffect(() => {
    fetchTopStories();
    //fetchData();
  }, []);
  return (
    <div>
      <div>
        {/* {console.log(state.content)} */}
        {/* {state.content.map(detail => console.log(detail.data))} */}
        <div>
          {state.content.map((detail, index) => (
            <div>
              {console.log(detail.data)}
              <a href={detail.data.url} key={detail.data.id}>
                {index + 1}.{detail.data.title}
              </a>
              <a href={"https://" + trimUrl(detail.data.url)}>
                {" "}
                ({trimUrl(detail.data.url)})
              </a>
              <br />
              {detail.data.score} points by {detail.data.by} |{" "}
              <a href="#">hide</a> | comments
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default List4;
