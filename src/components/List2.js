import React, { useState, useEffect } from "react";
import Axios from "axios";
import Topstories from "./Topstories";

function List2() {
  const [lists, setList] = useState([]);
  const [ids, setid] = useState({});
  useEffect(async () => {
    const ab = "topstories";
    const { data } = await Axios.get(
      `https://hacker-news.firebaseio.com/v0/${ab}.json?print=pretty`
    );
    setList(data);
  }, []);
  // console.log(lists);
  return (
    <div>
      <Topstories idlist={lists} />;
    </div>
  );
}

export default List2;
