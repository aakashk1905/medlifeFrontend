import React from 'react';
import BlogsHero from './BlogsHero';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import OurBlogs from './OurBlogs';
import Footer from '../Footer';

const BlogsPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* Breadcumber menu */}
      <div className="text-sm breadcrumbs px-5 md:px-10 mt-5">
        <ul>
          <li>
          <Link to={"/"}>Home</Link>
          </li>
          <li>
            Blogs
          </li>
        </ul>
      </div>
            
            <BlogsHero></BlogsHero>
            <OurBlogs></OurBlogs>
            <Footer></Footer>
        </div>
    );
};

export default BlogsPage;