import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Restcard from '../components/Restcard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestuarent } from '../redux/restuarentSlice'

function Home() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchRestuarent())
    }, [])
    const allRest = useSelector(state=>state.restuarentSlice.allRestuarent.restaurants)
    console.log("==1==");
    console.log(allRest);

  
  return (
    <>
    <Row>
      {
      allRest?.length>0?
      allRest.map((retuarent)=>(
        <Col className='px-5 py-3' sm={6} md={4} lg={4}>
        <Restcard restuarent={retuarent}/>
    
    </Col>
      )) :
      "Loading..."

      
      }
       
    </Row>
    </>
  )
}

export default Home