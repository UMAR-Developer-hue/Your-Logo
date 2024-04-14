import React from 'react';
import {useParams} from 'react-router-dom'

function Params() {
    const {userid} = useParams()
  return (
    <p className='bg-gray-600 text-white text-3xl p-4 text-center'>User: {userid}</p>
  );
}

export default Params;
