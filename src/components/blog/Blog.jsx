import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='md:text-6xl text-4xl text-center font-bold mt-20'>Question & Answers</h1>
            <div className='lg:px-24 px-2 mt-16'>
                <div className='border border-[#A3BB98] rounded-lg p-5 my-3'>
                    <h2 className='text-xl font-bold'>What are the differences between uncontrolled and controlled components</h2>
                    <p className='text-gray-600 mt-5'>
                        The main difference between uncontrolled and controlled components is how they handle data. In uncontrolled components data is handled directly by DOM. Whereas in controlled components data is handled by react components. With controlled components it is easier and simpler to handle user input compare to uncontrolled components.
                    </p>
                </div>
                <div className='border border-[#A3BB98] rounded-lg p-5 my-3'>
                    <h2 className='text-xl font-bold'>How to validate React props using PropTypes</h2>
                    <div className='text-gray-600 mt-5'>
                        <p>We can define datatypes for the props that a component recieves. To do that we access props like:</p>
                        <p>
                            MyComponent.propTypes = &#123;
                            title: PropTypes.string.isRequired,
                            description: PropTypes.string.isRequired
                            &#125;
                        </p>
                    </div>
                </div>
                <div className='border border-[#A3BB98] rounded-lg p-5 my-3'>
                    <h2 className='text-xl font-bold'>What is the difference between nodejs and express js</h2>
                    <p className='text-gray-600 mt-5'>
                        Node.js is a server-side JavaScript runtime environment built on top of Chrome's V8 engine. Node.js provides a platform for running JavaScript code outside of a web browser. Express.js is a web application framework built on top of Node.js. Express.js simplifies the process of creating web applications using Node.js. It provides a set of features for building web applications, such as routing, middleware, and templating engines etc.
                    </p>
                </div>
                <div className='border border-[#A3BB98] rounded-lg p-5 my-3'>
                    <h2 className='text-xl font-bold'>What is a custom hook, and why will you create a custom hook?</h2>
                    <p className='text-gray-600 mt-5'>
                    In React, custom hook is a function that allows to reuse logic across different components. It is a way to share functionality between components without repeating the same code in each component. we can create custom hook to handle form input, fetch data from an API
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;