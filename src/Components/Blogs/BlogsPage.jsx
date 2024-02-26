import React from "react";
import BlogsHero from "./BlogsHero";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import OurBlogs from "./OurBlogs";
import Footer from "../Footer";
import { Helmet } from "react-helmet-async";

const BlogsPage = () => {
  return (
    <div>
      <Helmet>
        <title>Medlife Easy | Blogs</title>
      </Helmet>
      <Navbar></Navbar>
      <BlogsHero></BlogsHero>
      <OurBlogs></OurBlogs>
      <Footer></Footer>
    </div>
  );
};

export default BlogsPage;
