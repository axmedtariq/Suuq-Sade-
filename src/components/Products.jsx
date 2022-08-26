import styled from 'styled-components';
import Product from '../components/Product';
import { PopularProducts } from '../Data';

const Container = styled.div`

      padding: 20px;
      display: flex;
      flex-wrap:wrap;


`

const Products = () => {


	return(

		<Container>
		{PopularProducts.map((item) => (

			<Product item={item} key={item.id}/>


			))}
		</Container>



		)
}

export default Products;