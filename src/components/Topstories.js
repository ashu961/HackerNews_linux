import React, { useEffect, useState } from "react";
import Axios from "axios";
function Topstories(props) {
  const { idlist } = props;
  const [details, setdetails] = useState({});
  var i;
  useEffect(async () => {
    for (i = 0; i < idlist.length(); i++) {
      const data = await Axios.get(
        `https://hacker-news.firebaseio.com/v0/21094231.json?print=pretty`
      );
      setdetails(...details, data);
    }
  }, [idlist]);
  console.log(details);
  return <div>nkk</div>;
}

export default Topstories;
