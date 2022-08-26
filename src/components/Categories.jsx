import  styled  from 'styled-components';
import { Categories } from '../Data';
import CategoryItem from './CategorieItems';

const Container = styled.div`

   display: flex;
   padding:20px;
    
`
const Category = () => {

	return <Container>{Categories.map(item => (<CategoryItem item={item} key={item.id}/>


		))}
	</Container>
};
export default Category;