import React from 'react'
import { Card } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
const SingleSkelton = (props) => {
  const skeletonShow = Array.from({length:props.length}).map((item,index)=>(
    <div className={`col-lg-1 col-md-6 col-12 ${props.classes} mx-2 `} key={index}>
    <div className=' my-2'>
      <Skeleton   height={props.height} width={props.width}/>
    </div>
    </div>
  ))
  return (
    <>
    {skeletonShow}
    </>
  )
}
export default SingleSkelton
