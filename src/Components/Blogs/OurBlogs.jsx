import React, { useEffect, useState } from "react";
import useAxiosBaseUrl from "../../hooks/useBaseUrl";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const OurBlogs = () => {
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
    <div className="py-10 px-5">
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
                <img className="w-full mb-3 rounded-t-lg" src={blog.avatar.url} alt="" />
                <div className="px-4 pb-4">
                  <h1 className="text-[#17324A] text-2xl font-semibold mb-2">
                    {blog.title}
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
  <Link to={`/blogsDetails/${blog._id}`} className="bg-gray-300 rounded-lg p-3 font-semibold text-purple-800">
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

export default OurBlogs;
