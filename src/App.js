import React, { useState, useEffect } from "react";
import axios from "axios";
import { Posts } from "./components/Posts";
import { Pagination } from "@mui/material";
import usePagination from "./components/Paginations";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const [page, setPage] = useState(1);
  const _DATA = usePagination(data, itemsPerPage);

  const handlePageChange = (e, page) => {
    setPage(page);
    _DATA.jump(page);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Pagination</h1>
      <Posts data={_DATA} loading={loading} />
      <Pagination
        count={pageCount}
        color="primary"
        size="large"
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default App;
