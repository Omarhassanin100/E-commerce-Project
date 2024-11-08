import React from 'react'
import Skeleton from 'react-loading-skeleton'
interface Skelton {
    length:number;
    width:string;
    height:string;
    classes?:string
}
const SingleSkelton:React.FC<Skelton> = (props:Skelton) => {
  const skeletonShow:React.JSX.Element[] = Array.from({length:props.length}).map((item,index)=>(
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
