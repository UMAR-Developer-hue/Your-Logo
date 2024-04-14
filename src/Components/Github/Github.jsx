import React, { useEffect, useState } from 'react';


function Github() {
    const [data, setdata] = useState([]);
    const [data2, setdata2] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
            .then(Response => Response.json())
            .then(data => {
                console.log(data);
                setdata(data) 
            });

        fetch('https://api.github.com/users/UMAR-Developer-hue')
            .then(Response => Response.json())
            .then(data2 => {
                console.log(data2);
                setdata2(data2)
            });
    }, []);
    return (
        <>

            <div className='text-center m-4 bg-gray-200 p-14 text-3xl rounded-lg'>
            User Name:  <span className='text-white-800 py-90'>{data2.name}</span><br></br>
            User ID:  <span className='text-orange-700 pe-8 mb-20'>{data2.login}</span><br></br>
            Github Folowers:<span className='text-orange-700 '>{data.followers}</span><br></br>
                <img className='text-red-700' src={data2.avatar_url} alt='Wait! Create link with Github.......... ' width={300} height={1000}></img>
            </div>
        </>
    );
}

export default Github;
