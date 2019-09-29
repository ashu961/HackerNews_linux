import React, { useState } from "react";
import Axios from "axios";

function List() {
  const [example, setExample] = useState({});

  const getexample = async () => {
    const res = await Axios.get(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    // const num = res.data.map(r => {
    //   await Axios.get(
    //     "https://hacker-news.firebaseio.com/v0/item/{r}.json?print=pretty"
    //   );
    // });
    //
    const { data } = res;
    console.log(data);
    const list = data
      .map(async id => {
        await Axios.get(
          "https://hacker-news.firebaseio.com/v0/item/{id}.json?print=pretty"
        );
      })
      .then(console.log(list));
  };

  return (
    <div>
      <div className="container-fluid mx-5">
        <button onClick={getexample}>c</button>
      </div>
    </div>
  );
}

export default List;
