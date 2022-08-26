import styled from 'styled-components';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RoomIcon from '@mui/icons-material/Room';



const Container = styled.div`

flex:1
display: flex;
flex-direction: column;
padding: 20px;
`
const Left = styled.div`flex:1`


const Logo = styled.div``
const Desc = styled.p`margin: 20px 0px;`
const Center = styled.div`flex:1 padding: 20px;`
const Title = styled.h3`margin-bottom: 30px;`
const List = styled.ul`margin:0; padding:0; list-style:none; display:flex; flex-wrap:wrap;`
const ListItem = styled.li`width: 50%; margin-bottom:10px;`
const Right = styled.div`flex:1 padding: 20px;`
const ContactItem = styled.div`margin-bottom:20px; display:flex; align-items:center`
const Payement = styled.img`width: 15%;`

const Footer = () => {

	return(

		<Container>
			
			<Left>

				<Logo>Suuq-Sade</Logo>
				<Desc>
					
					There are many variations of passages of Lorem ipsum avaliable,
					but the majority have suffered
					alteration in some form, by injected humour,
					or randomised words which don't look even slightly beleviable.
				</Desc>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
				<ListItem>Home</ListItem>
				<ListItem>Cart</ListItem>
				<ListItem>Men Fashion</ListItem>
				<ListItem>Women Fashion</ListItem>
				<ListItem>Accessories </ListItem>
				<ListItem>My Account</ListItem>
				<ListItem>Order Listing </ListItem>
				<ListItem>Wishlist</ListItem>
				<ListItem>Terms</ListItem>
				</List>

			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
				<RoomIcon style={{marginRight:"10px"}}/> 622 Dixie Path, South Tobinchester 98336
				</ContactItem>
				<ContactItem>
				<PhoneCallbackIcon /> +1 00252634789415
				</ContactItem>
				<ContactItem>
				<MailOutlineIcon />Info@Suuq-Sade.com
				</ContactItem>
				<ContactItem>
				<Payement src="https://media.horusrc.com/wysiwyg/pay_by_cards.jpg" />
				</ContactItem>
			</Right>
		</Container>



		);


}
export default Footer;