import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Restcard({restuarent}) {
  return (
    <>
    <Link to={"/Restview"} style={{textDecoration:"none"}}>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={restuarent.photograph} 
      width={"100%"} height={"280px"} />
      <Card.Title className='text-center' style={{color:"black",fontFamily:"-moz-initial"}}> <h3>{restuarent.name}</h3></Card.Title>
     <Card.Text></Card.Text>
      <Card.Body>
        
        
       
      </Card.Body>
    </Card>
    </Link>
    </>
  )
}

export default Restcard