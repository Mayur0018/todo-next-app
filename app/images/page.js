import React from 'react'
import Image from 'next/image';
import sampleImage from "../../assets/skullbg3.png";
const page = () => {
  return (
    <div>
        <p>
            We Wil Be Show The Our Images Here:
            <Image src={sampleImage} alt="" />
        </p>
    </div>
  )
}

export default page