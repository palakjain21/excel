import React, { useEffect, useState } from "react";
import Table from "../../component/table/Table";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("http://localhost:9000");
      const data = await response.json();
      setData(data);
    };
    fetchdata();
  }, []);

  return (
    <div>
      <Table data={data} />
    </div>
  );
};
export default Home;
