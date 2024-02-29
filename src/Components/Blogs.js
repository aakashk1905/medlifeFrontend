import React, { useEffect, useState } from "react";
import "./styles/Blogs.css";
import useAxiosBaseUrl from "../hooks/useBaseUrl";
import Loader from "./Loader/Loader";
import { Link } from "react-router-dom";
import pic from "../Assests/Dr-Manu-Bora-for-ACL-Treatment.jpg"


const Blogs = () => {
  const axiosBaseUrl = useAxiosBaseUrl();
  const [loading, setLoading] = useState(true);

  // Data fetch from API

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axiosBaseUrl
      .get("/api/v1/blogs")
      .then((res) => res.data)
      .then((data) => {
        setBlogs(data.blogs);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [axiosBaseUrl]);
  
  return (
    <div className="py-7 px-5">
      <div>
        {/* Headline */}
        <h1 className="text-gray-700 text-4xl font-semibold text-center mb-10">
          Our Recent Blogs
        </h1>

        {/* Blogs card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {loading ? (
            <Loader />
          ) : blogs?.length > 0 ? (
            blogs.map((blog) => (
              <div key={blog._id} className="shadow-lg rounded-lg">
                <img
                  className="w-full h-64 mb-3 rounded-t-lg"
                  // src={pic}
                  src={blog.avatar.url}
                  alt=""
                />
                <div className="px-5 pb-[30px]">
                  <h1 className="text-[#17324A] text-2xl font-semibold mb-2">
                    {blog.title.slice(0, 30)} ... ...
                  </h1>
                  {blog.about.length > 200 ? (
                    <div className=" mb-5">
                      <p className="text-gray-500 mb-2">
                        {`${blog.about.slice(0, 200)}... ...`}
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-500 mb-5">{blog.about}</p>
                  )}
                  {blog._id && (
                    <Link
                      to={`/blogsDetails/${blog._id}`}
                      className="bg-gray-300 rounded-lg p-3 font-semibold text-purple-800 "
                    >
                      Read More
                    </Link>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
