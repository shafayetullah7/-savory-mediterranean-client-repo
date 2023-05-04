import React from 'react';

const Services = () => {
    const services=[
        {
          id: "1",
          name: "Personalized Meal Planning",
          img:"https://i.postimg.cc/7ZvHRFkF/icons8-food-bar-50-1.png",
          description: "Receive personalized meal plans tailored to your dietary needs and preferences, based on the Mediterranean cuisine."
        },
        {
          id: "2",
          name: "Cooking Classes",
          img:"https://i.postimg.cc/CLnMmFWC/icons8-cooking-64-1.png",
          description: "Learn how to prepare Mediterranean dishes from expert chefs through online or in-person cooking classes."
        },
        {
          id: "3",
          img:"https://i.postimg.cc/6pdWxM6y/icons8-chef-64.png",
          name: "Private Chef Services",
          description: "Enjoy a Mediterranean dining experience in the comfort of your own home with the help of a private chef."
        },
        {
          id: "4",
          name: "Consulting Services",
          img:"https://i.postimg.cc/90KmCSqq/icons8-consultation-50.png",
          description: "Get consulting services to incorporate Mediterranean cuisine into your restaurant or food business."
        }
      ]
    return (
        <div>
            <h1 className='text-center text-4xl font-bold'>Our Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 justify-items-center mt-16'>
                {services.map(service => <div 
                key={service.id}
                className='border w-[250px] h-[250px] p-7 rounded-xl border-[#a97253]'
                >
                    <img className='block w-[50px] h-[50px]' src={service.img} alt="" />
                    <div className='mt-6'>
                        <h2 className='text-2xl font-bold font-avro italic'>{service.name}</h2>
                        <p className='mt-2 italic text-gray-800'>{service.description}</p>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Services;