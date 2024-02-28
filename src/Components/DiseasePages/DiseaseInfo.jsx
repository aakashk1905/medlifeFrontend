import React from 'react';

const DiseaseInfo = ({content, disease}) => {
    return (
        <div className='py-12'>
            <div className='bg-[#ECF7FC] py-6 px-5 lg:px-10'>
            <h1 className='text-2xl font-semibold mb-4'>What is <span className='capitalize'>{disease}</span>?</h1>
            <p className='text-justify leading-7'>{content.diseaseInfo.para1}</p>
            <p className='text-justify leading-7 mb-5'>{content.diseaseInfo.para2}</p>
            <p className='text-justify leading-7'>{content.diseaseInfo.para3}</p>
            <p className='text-justify leading-7'>{content.diseaseInfo.para4}</p>
        </div>
        </div>
    );
};

export default DiseaseInfo;