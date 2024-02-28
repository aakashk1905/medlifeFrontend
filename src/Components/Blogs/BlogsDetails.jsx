import React, { useEffect, useState } from 'react';
import Form from '../Form';
import Footer from '../Footer';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import { MdOutlineDone } from 'react-icons/md';
import useAxiosBaseUrl from '../../hooks/useBaseUrl';
import Loader from '../Loader/Loader';

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
        console.log(data);
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
  }, [id,axiosBaseUrl]);
  if (loading) return <Loader />;
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
            <Link>Blogs</Link>
          </li>
          <li className="capitalize">{blogDetails.title.slice(0,30 )} ... ...</li>
        </ul>
      </div>
            <div className='grid grid-cols-1 lg:grid-cols-5 px-5 md:px-10 '>
                <div className='col-span-3 p-5 rounded-lg shadow-lg'>
                <div className="">
            <img className="w-full lg:w-1/2 mb-3" src={blogDetails?.avatar?.url} alt="" />
            <div className="px-4 pb-4">
            <h1 className="text-[#17324A] text-2xl font-semibold mb-2">
              {blogDetails.title}
            </h1>
            <p className="text-gray-500 mb-4">
              {blogDetails.about}
            </p>

            <h2 className='text-[#17324A] text-xl font-semibold mb-1'>What is a Hernia?</h2>
            <p className="text-gray-500 mb-4">
            A hernia occurs when an organ or fatty tissue protrudes through a weak spot or tear in the surrounding muscle or connective tissue. This can result in a noticeable bulge or lump, particularly when straining or during physical activity.
            </p>

            <h2 className='text-[#17324A] text-xl font-semibold mb-1'>What is a Hernia?</h2>
            <p className="text-gray-500 mb-1">1. Inguinal Hernia:</p>
            <ul className='list-disc text-gray-500 pl-8'><li>This is the most common type of hernia and occurs when part of the intestine pushes through the abdominal wall into the groin area. It is more common in men.</li></ul>
            <p className="text-gray-500 mb-1">2. Femoral Hernia:</p>
            <ul className='list-disc text-gray-500 pl-8'><li>Similar to an inguinal hernia, a femoral hernia involves a bulge in the upper thigh. It is more common in women, especially those who are pregnant or obese.</li></ul>
            <p className="text-gray-500 mb-1">3. Incisional Hernia:</p>
            <ul className='list-disc text-gray-500 pl-8'><li>This type occurs at the site of a previous abdominal surgery, where the tissue protrudes through the scar or incision.</li></ul>
            <p className="text-gray-500 mb-1">4. Hiatal Hernia:</p>
            <ul className='list-disc text-gray-500 pl-8 mb-4'><li>In a hiatal hernia, the upper stomach bulges through the diaphragm into the chest cavity. It can cause acid reflux and other digestive issues.</li></ul>



            <h2 className='text-[#17324A] text-xl font-semibold mb-1'>Causes and Risk Factors:</h2>
            <p className="text-gray-500 mb-1">1. Weak Muscles:</p>
            <ul className='list-disc text-gray-500 pl-8'><li>Weakness in the abdominal muscles is a primary factor contributing to hernias.</li></ul>
            <p className="text-gray-500 mb-1">2. Age:</p>
            <ul className='list-disc text-gray-500 pl-8'><li>Hernias can develop at any age, but they are more common in older individuals.</li></ul>
            <p className="text-gray-500 mb-1">3.Lifting Heavy Objects:</p>
            <ul className='list-disc text-gray-500 pl-8'><li>Straining while lifting heavy objects can increase the risk of hernias.</li></ul>
            <p className="text-gray-500 mb-1">4. Chronic Cough or Constipation:</p>
            <ul className='list-disc text-gray-500 pl-8 mb-4'><li>Conditions that cause persistent straining, such as chronic cough or constipation, can contribute to hernia development.</li></ul>


            <h2 className='text-[#17324A] text-xl font-semibold mb-1'>Symptoms:</h2>
            <p className="text-gray-500 mb-1">1. Visible Bulge:</p>
            <ul className='list-disc text-gray-500 pl-8'><li>The most common symptom is a noticeable bulge or lump in the affected area.</li></ul>
            <p className="text-gray-500 mb-1">2. Pain or Discomfort:</p>
            <ul className='list-disc text-gray-500 pl-8'><li>Pain or discomfort may be present, especially when lifting, coughing, or bending over.</li></ul>
            <p className="text-gray-500 mb-1">3. Burning Sensation:</p>
            <ul className='list-disc text-gray-500 pl-8 mb-4'><li>Hiatal hernias may cause a burning sensation in the chest (heartburn).</li></ul>


            <h2 className='text-[#17324A] text-xl font-semibold mb-1'>Treatment Options:</h2>
            <p className="text-gray-500 mb-1">1. Watchful Waiting:</p>
            <ul className='list-disc text-gray-500 pl-8'><li>Small hernias that are not causing symptoms may be monitored without immediate intervention.</li></ul>
            <p className="text-gray-500 mb-1">2. Lifestyle Changes:</p>
            <ul className='list-disc text-gray-500 pl-8'><li>Adopting a healthy lifestyle, including regular exercise, maintaining a healthy weight, and avoiding heavy lifting, can help prevent hernias.</li></ul>
            <p className="text-gray-500 mb-1">3. Surgery:</p>
            <ul className='list-disc text-gray-500 pl-8 mb-4'><li>For larger or symptomatic hernias, surgical repair may be recommended to push the protruding tissue back into place and strengthen the weakened area.</li></ul>


            <h2 className='text-[#17324A] text-xl font-semibold mb-1'>Med Life Easy: your source for top Hernia Doctors in Bihar</h2>
            <p className="text-gray-500 mb-4">When it comes to hernia treatment, you want to be sure you get the best possible care. Med Life Easy is your dependable companion in locating the best hernia specialists in Bihar. They offer a comprehensive network of skilled doctors who are well-equipped to accurately diagnose and treat hernias.</p>


            <h2 className='text-[#17324A] text-xl font-semibold mb-1'>Advantages of Choosing Med Life Easy:</h2>
            <div className="flex items-center gap-2 mb-2">
            <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p>You will get access to a network of certified hernia specialists.</p>
          </div>
            <div className="flex items-center gap-2 mb-2">
            <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p>Detailed information on each doctor's specialization and experience.</p>
          </div>
            <div className="flex items-center gap-2 mb-2">
            <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p>Real patient feedback to boost your confidence in your decision.</p>
          </div>
            <div className="flex items-center gap-2 mb-4">
            <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p>Simple appointment scheduling and bookings.</p>
          </div>


          

          <h2 className='text-[#17324A] text-xl font-semibold mb-1'>Conclusion :</h2>
            <p className="text-gray-500 mb-1">Dealing with a hernia can be stressful, but finding the appropriate doctor is the first step towards a good recovery. Med Life Easy makes this procedure easier by matching you with the best hernia experts in Bihar. Remember that early detection and treatment are critical for avoiding problems. Use Med Life Easy to locate the correct doctor for your hernia treatment and take the first step towards a healthier future. Our first priority is your well-being.</p>
            </div>
          </div>
                
                </div>

               <div className='col-span-2 flex justify-end'>
               <div className=' w-11/12'>
               <Form></Form>
               </div>
               </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BlogsDetails;