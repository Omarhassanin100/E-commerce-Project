import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {  useState } from 'react'
import { FormControl, FormSelect, Image , Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import PaginatedItems from './pagination/Pagination';
const TableShow = (props) => {

  const [search , setSearch] = useState('')
  const handleSearch =(e)=> {
   setSearch(e.target.value)
   props.setPage(1)
  }
  const filteredData = props.data.filter((item) => item[props.search].toLowerCase().includes(search.toUpperCase()))
  console.log(filteredData)
  const start = (props.page - 1) * props.limit
  const end =Number(start) + Number(props.limit)
  const final = filteredData.slice(start,end)
 const headerShow = props.header.map((item ,key1)=><th key={key1}>{item.Name}</th>)
   const dataShow = 
   final.map((item ,index)=>(
    <tr key={index}>
    {props.header.map((item2 ,index)=>(
    <td key={index}>{ 
 item2.key ==="image" ?  Array.isArray(item[item2.key]) ?
      (
          // Map through the image array and render each image
          
          <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            {item[item2.key].map((img, imgIndex) => (
              <Image
                key={imgIndex}
                style={{ width: "40px", height: "40px" }}
                src={img}  // Since img is the image URL
                alt="Product Image"
              />
            ))}
          </div>

         
        )
        
        :(<Image style={{width:"40px" , height:"40px"}} src={item[item2.key]} alt='mmm'/> ): item[item2.key]}</td>
    ))}


    
    <td>
        <div className='d-flex align-items-center gap-2 justify-content-between'>
       <Link to={`${item.id}`}><FontAwesomeIcon cursor="pointer" fontSize={"19px"}  icon={faPenToSquare}/></Link>
        <FontAwesomeIcon  
         onClick={() => props.delete(item.id)}
         cursor="pointer"  
         color='red' 
         fontSize={"19px"} icon={faTrash} />
        </div>
      </td>
    </tr>
    ))
 ;

  return (
    <div >
    <div className='col-3'>
      <FormControl
      className='my-2'
      placeholder='Search'
      type='search'
      aria-label='input example'
      onChange={handleSearch}
      />
    </div>
    <div className="custom-scrollbar" style={{ overflowX: 'auto' }}>
         <Table striped bordered hover>
      <thead>
        <tr>
        {headerShow}
        <th>action</th>
        </tr>
      </thead>
      <tbody>
      {dataShow}
      </tbody>

    </Table>
    </div> 
    <div className='d-flex align-items-center justify-content-center'>
      <div>
        <FormSelect onChange={(e)=> props.setLimit(e.target.value)}>
        <option value="5" >5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        </FormSelect>
      </div>
      <div>
      <PaginatedItems setPage={props.setPage} itemsPerPage={props.limit} data={filteredData} />
      </div>
    </div>
      </div>
  )
}

export default TableShow
