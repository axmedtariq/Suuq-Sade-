import React from 'react';
import styled  from 'styled-components';

const Container = styled.div`
margin:3px;
height: 70vh;
position:relative;


`
const Image = styled.img`
 
width: 100%;
object-fit: cover;
height: 100%

`
const Info = styled.div`
 
position:absolute;
top:0;
left:0;
width:100%;
height:100%
display:flex;
flex-direction: column;
align-item:center;
justify-content:center;


`
const Title = styled.h1`

color:Black;
margin-bottom: 20px;


`
const Button = styled.button`

border:none;
padding: 10px;
background-color:Black;
color:gray;
cursor:pointer;
font-weight:600;


`


const CategoryItem = ({item}) => {
	return (

		<Container>
		    <Image src={item.Img} />
		    <Info>
		    <Title>{item.title}</Title>
		    <Button>SHOP NOW </Button>
		    </Info> 
		</Container>




		);
}
export default CategoryItem;