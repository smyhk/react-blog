import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const [name, setName] = useState('mario');

  // Runs with every render
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      {/* conditional templating */}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
