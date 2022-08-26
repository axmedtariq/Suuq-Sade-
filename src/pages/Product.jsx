import styled from 'styled-components';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'


const Container = styled.div``
const Wrapper = styled.div`
padding:50%;
display:flex;

`
const ImageContainer = styled.div``
const Image = styled.img`width: 100%; height:90vh; object-fit:cover`;
const InfoContainer = styled.div`flex:1; padding:0px 50px`;
const Title = styled.h1`font-weight:200;`
const Desc = styled.p`margin:20px;`
const Price = styled.span`font-weight:100; font-size:40px;`


const FilterContainer = styled.div`

width: 50%;
margin:30px;
display:flex;
justify-content:space-between;



`


const Filter = styled.div`

display:flex;
align-items:center;

`
const FilterTitle = styled.span`

font-size:20px;
font-weight:200;

`
const FilterColor = styled.div`

width: 20px;
height: 20px;
border-radius:50%;
background-color:${props=>props.color};
margin:0px 5px;

`
const FilterSize = styled.select`

margin-left:10px;
padding:5px;


`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;


`
const AmountContainer = styled.div`

display:flex;
align-items:center;
font-weight:700;


`
const Amount = styled.span`

width: 30px;
height: 30px;
border-radius: 10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;

`
const Button = styled.button`
padding:15px;
border: 2px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;

&:hover{
	background-color:#f8f4f4;
}

`






const Product = () => {

	return(

		<Container>

		<Navbar />
		<Announcement />
		<Wrapper>
		<ImageContainer>
		<Image src="https://images-eu.ssl-images-amazon.com/images/I/71yM0xUAetL._AC._SR360,460.jpg"/>
		</ImageContainer>
		<InfoContainer>
		<Title>T-Shirt</Title>
		<Desc>This is T-shirt from the most developed companieskkkkkkkkkkkkkk
		kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
		kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
		kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
		</Desc>
		<Price>$25</Price>
		<FilterContainer>
			<Filter>
				<FilterTitle>
					Color
				</FilterTitle>
				<FilterColor color="black"/>
				<FilterColor color="darkblue"/>
				<FilterColor color="gray"/>
			</Filter>
			<Filter>
				<FilterTitle>Size</FilterTitle>
				<FilterSize>
					<FilterSizeOption>XS</FilterSizeOption>
					<FilterSizeOption>S</FilterSizeOption>
					<FilterSizeOption>M</FilterSizeOption>
					<FilterSizeOption>L</FilterSizeOption>
					<FilterSizeOption>XL</FilterSizeOption>
				</FilterSize>
			</Filter>
		</FilterContainer>
		<AddContainer>
		<AmountContainer>
		<RemoveIcon/>
		<Amount>1</Amount>
		<AddIcon/>
		</AmountContainer>
		<Button>ADD TO CART</Button>
		</AddContainer>
		</InfoContainer>
		</Wrapper>
		<Newsletter />
		<Footer />
		</Container>



		)

}

export default Product;