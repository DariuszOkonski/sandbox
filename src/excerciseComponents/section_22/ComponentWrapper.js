import { useParams } from 'react-router-dom';
import Food from './Food';

function ComponentWrapper({ children }) {
  const params = useParams();

  return <Food {...params} />;
}

export default ComponentWrapper;
