import React, { useEffect, useState } from "react";
import Form from "../Form";
import Footer from "../Footer";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import useAxiosBaseUrl from "../../hooks/useBaseUrl";
import Loader from "../Loader/Loader";
import pic from "../../Assests/Dr-Manu-Bora-for-ACL-Treatment.jpg"

const BlogsDetails = () => {
  const { id } = useParams();
  const axiosBaseUrl = useAxiosBaseUrl();
  const [loading, setLoading] = useState(true);

  // Data fetch from API

  const [blogDetails, setBlogDetails] = useState([]);
  useEffect(() => {
    axiosBaseUrl
      .get(`/api/v1/blog/${id}`)
      .then((res) => res.data)
      .then((data) => {
        if (data.success) {
          setBlogDetails(data.blog);
          setLoading(false);
        } else {
          window.location.href = `https://${window.location.hostname}/blog`;
        }
      })
      .catch(
        (err) =>
          (window.location.href = `https://${window.location.hostname}/blog`)
      );
  }, [id, axiosBaseUrl]);
  if (loading) return <Loader />;
  return (
    <div>
      <Navbar></Navbar>

      {/* Breadcrumbs menu */}
      <div className="text-sm breadcrumbs px-5 md:px-5 lg:px-10 mt-5 mb-3">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/blogs"}>Blogs</Link>
          </li>
          <li className="capitalize">
            {blogDetails.title.slice(0, 30)} ... ...
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 px-5 gap-0 lg:gap-5 md:px-5 lg:px-10 mb-10">
          <div className="col-span-2 rounded-3xl shadow-lg h-full lg:h-[413px]">
            <img
              className="w-full h-full rounded-b-3xl rounded-t-3xl"
              src={pic}
              // src={blogDetails?.avatar?.url}
              alt=""
            />
          </div>

          <div className="border-t border-gray-100 rounded-3xl mt-7 lg:mt-0 hidden lg:block">
            <Form></Form>
          </div>
      </div>

      <div>
      <div className="px-5 lg:px-10 mb-5 lg:mb-10">
            <h1 className="text-[#17324A] text-2xl font-semibold mb-3">
              {blogDetails.title}
            </h1>
            <p className="text-gray-500 mb-4 leading-8">
              {blogDetails.about}
            </p>
            </div>

            <div className="border-t border-gray-100 rounded-3xl mt-7 lg:mt-0 block lg:hidden px-5 mb-10">
            <Form></Form>
          </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BlogsDetails;
