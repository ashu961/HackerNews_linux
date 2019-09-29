import React, { useState, useEffect } from "react";
import Axios from "axios";

function List3() {
  const [lists, setList] = useState([]);
  const [details, setdetails] = useState([]);
  var i = 0;
  const hello = {
    adjkjd: 123
  };
  const fetchTopStories = () => {
    const res = Axios.get(
      `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
    )
      .then(res => (res = res.data))
      //   .then(res => {
      //     const content = res.map(id => {
      //       Axios.get(
      //         `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      //       )
      //         // .then(content => (content = content.data))
      //         .then(content => setdetails(...details, content));
      //     });
      //   });
      .then(() => {
        const content = Axios.get(
          ` https://hacker-news.firebaseio.com/v0/item/2921983.json?print=pretty`
        )
          .then(content => setdetails(...details, content))
          .then(setdetails(...details, hello));
      });
  };

  useEffect(() => {
    fetchTopStories();
    //fetchData();
  }, []);
  //   console.log(lists);

  return (
    <div>
      {console.log(details)}
      {/* <ul>
        {details.map(detail => (
          <li key={detail.id}>{detail.text}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default List3;
