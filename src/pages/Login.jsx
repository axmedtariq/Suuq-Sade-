import styled from 'styled-components';

const Container = styled.div`
width:100vw;
height:100vh;
background:linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://c8.alamy.com/comp/2GGNAFB/mobile-phones-flying-on-gray-background-various-applications-on-smartphones-screens-email-list-login-screen-customer-rating-3d-illustration-2GGNAFB.jpg" );
display:flex;
align-items:center;
justify-content:center;

`
const Wrapper = styled.div`

width:400px;
padding: 20px;
background-color: white;

`
const Form = styled.form`

display:flex;
flex-direction:column;

`
const Title = styled.h1`

font-size: 24px;
font-weight:300;
`
const Input = styled.input`

flex:1;
min-width: 30%;
margin:10px 0;
padding: 10px;
`

const Button = styled.button`

width: 15%;
border: none;
padding: 10px;
background-color: teal;
color:white;
cursor:pointer;
margin-bottom:10px;

`
const Link = styled.a`

margin: 5px 0;
font-size:12px;
text-decoration:underline;
cursor:pointer;

`


const Login = () => {

	return(

		<Container>
		<Wrapper>
		<Title>SIGN IN</Title>
			
			<Form>
				

				<Input placeholder="Username" />
				<Input placeholder="Password" />
				<Button>LOGIN</Button>
				<Link>DO NOT REMEMBER YOUR PASSWORD</Link>
				<Link>CREATE NEW ACCOUNT </Link>
		
				
			</Form>
		</Wrapper>
			
		</Container>



		)
 
}
export default Login;