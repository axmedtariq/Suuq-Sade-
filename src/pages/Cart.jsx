import styled from 'styled-components';
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled.div``
const Wrapper = styled.div`

padding: 10px;
`
const Title = styled.h1`

font-weight:300;
text-align:center;
`
const Top = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;


`
const TopButton = styled.button`

padding: 10px;
font-weight:600;
cursor:pointer;
padding: 10px;
border:${(props)=>props.type === "filled" && "none"};
background-color:${(props)=>props.type === "filled" ? "black" : "transparent"};
color:${(props)=>props.type === "filled" && "white"};
`
const TopTexts = styled.div``
const TopText = styled.div`

text-decoration:underline;
cursor:pointer;
margin: 0 10px;

`


const Bottom = styled.div`

display:flex;
justify-content: space-between;
`
const Info = styled.div`

flex:3;
`

const Product = styled.div`

display: flex;
justify-content; space-between;
`
const ProductDetail = styled.div`

flex:2;
display:flex;
justify-content: space-between
`
const Image = styled.img`

width:200px

`
const Details = styled.div`

padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`
const ProductName = styled.span``
const ProductID = styled.span``
const ProductColor = styled.div`

width: 20px;
height: 20px;
border-radius: 500%;
background-color:${props=>props.color};

`
const ProductSize = styled.span``
const PriceDetail = styled.div`


flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const ProductAmountContainer = styled.div`

display:flex;
align-items:center;
margin-bottom:20px;

`
const ProductAmount = styled.div`

font-size: 24px;
margin: 5px;
`
const ProductPrice = styled.div`

font-size:30px;
font-weight:200;
`
const Summary = styled.div`

flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
`
const SummaryTitle = styled.h1`

font-weight:200;
`
const SummaryItem = styled.div`

margin: 30px 0px;
display:flex;
justify-content: space-between;
font-weight: ${props=>props.type ==="total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`

width: 100%;
padding: 10px;
background-color: black;
color:white;
font-weight:600;

`



const Cart = () => {

	return(

		<Container>

		<Navbar />
		<Announcement />
		<Wrapper>
		<Title>YOUR BAG</Title>
		<Top>
			<TopButton>CONTINUE SHIPPING</TopButton>
			<TopButton type="filled">CHECKOUT NOW</TopButton>
			<TopTexts>
				<TopText>Shopping Bag(2)</TopText>
				<TopText>Your Wishlist(0)</TopText>
			</TopTexts>
		</Top>
		<Bottom>
			<Info>
			<Product>
			<ProductDetail>
			<Image src="https://rukminim1.flixcart.com/image/332/398/xif0q/shoe/y/b/x/7-ws-9310-tying-grey-original-imag6ut3hzm2zyqm-bb.jpeg?q=50" />
			<Details>
			<ProductName><b>Product:</b>JESSIE THUNDEER SHOES</ProductName>
			<ProductID><b>ID:</b>0012546454</ProductID>
			<ProductColor color="black"/>
			<ProductSize><b>Size:</b>37.5</ProductSize>
			</Details>
			</ProductDetail>
			<PriceDetail>
				<ProductAmountContainer>
					<AddIcon />
					<ProductAmount>2</ProductAmount>
					<RemoveIcon />
				</ProductAmountContainer>
				<ProductPrice>$30</ProductPrice>
			</PriceDetail>
			</Product>
			<Product>
			<ProductDetail>
			<Image src="https://media.istockphoto.com/photos/blue-tshirt-isolated-on-white-background-picture-id471951938?k=20&m=471951938&s=612x612&w=0&h=2jyDEQ1eMXTskOwCPFqIwfGBpAWralYgpT_ci_3cpRc=" />
			<Details>
			<ProductName><b>Product:</b>T-Shirt</ProductName>
			<ProductID><b>ID:</b>001257894561</ProductID>
			<ProductColor color="black"/>
			<ProductSize><b>Size:</b>12.5</ProductSize>
			</Details>
			</ProductDetail>
			<PriceDetail>
				<ProductAmountContainer>
					<AddIcon />
					<ProductAmount>1</ProductAmount>
					<RemoveIcon />
				</ProductAmountContainer>
				<ProductPrice>$25</ProductPrice>
			</PriceDetail>
			</Product>
			</Info>
			<Summary>
				<SummaryTitle>ORDER SUMMERY</SummaryTitle>
				<SummaryItem>
				<SummaryItemText>SubTotal</SummaryItemText>
				<SummaryItemPrice>$ 80</SummaryItemPrice>
				</SummaryItem>
				<SummaryItem>
				<SummaryItemText>Estimated Shipping </SummaryItemText>
				<SummaryItemPrice>$ 5.90</SummaryItemPrice>
				</SummaryItem>
				<SummaryItem>
				<SummaryItemText>Shipping Discount </SummaryItemText>
				<SummaryItemPrice>$ -5.90</SummaryItemPrice>
				</SummaryItem>
				<SummaryItem type="total">
				<SummaryItemText >Total</SummaryItemText>
				<SummaryItemPrice>$ 80</SummaryItemPrice>
				</SummaryItem>
				<Button>CHECKOUT NOW </Button>
			</Summary>
		</Bottom>
		</Wrapper>
		<Footer />

		</Container>




		)
}
export default Cart;