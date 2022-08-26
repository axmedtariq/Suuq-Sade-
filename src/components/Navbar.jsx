import React from 'react';
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined} from "@material-ui/icons";
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
     
     height: 130px;
     ${mobile({ backgroundcolor: "red"})}
     
     `
const Wrapper = styled.div`
     
     padding: 10px;
     display:flex;
     justify-content: space-between;

`
;
const Left = styled.div` flex: 1; display:flex; align-items: center;`
const Language = styled.span`font-size:14px; cursor:pointer;`
const SearchContainer = styled.div`border: 0.5px solid lightgray; display: flex; align-items:center; margin-left: 25px; padding: 5px;`
const Input = styled.input`border:none;`
const Center = styled.div`flex:1; text-align:center`
const Logo = styled.h1`font-weight: bold;`
const Right = styled.div`flex:1;  display:flex; align-items:center; justify-content: flex-end;`
const MenuItems = styled.div`font-size: 14px; cursor:pointer; margin-left:25px;`

const Navbar = () => {

	return(

		<Container>
		<Wrapper>
			<Left>
				<Language>ENG</Language>
				<SearchContainer >
				  <Input/>
				<Search style={{color:"gray", fontSize:"16px"}}/>
				</SearchContainer>
			</Left>
			<Center>
				<Logo>
				Suuq-Sade
				</Logo>
			</Center>
			<Right>
				<MenuItems>REGISTER</MenuItems>
				<MenuItems>SIGN IN</MenuItems>
				<MenuItems>
					<Badge badgeContent={4} color="primary">
					<ShoppingCartOutlined />
					</Badge>
				</MenuItems>
			</Right>
		</Wrapper> 
		</Container>


		)
}
export default Navbar;