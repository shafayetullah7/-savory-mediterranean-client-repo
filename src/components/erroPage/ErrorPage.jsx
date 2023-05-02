import React from 'react';
import { useRouteError } from 'react-router-dom';
import errorImage from '../../assets/error404.json'
import { useLottie } from 'lottie-react';



const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    const options = {
        animationData: errorImage,
        loop: true
      };
    
      const { View } = useLottie(options);
    
      

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div>
                <div className='w-[400px]'>{View}</div>
                
                <p className='text-2xl text-gray-600 font-semibold text-center'>Sorry, an unexpected error has occurred.</p>
                <p className='text-red-500 text-center'>
                    Error: <i>{error.status} {error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;