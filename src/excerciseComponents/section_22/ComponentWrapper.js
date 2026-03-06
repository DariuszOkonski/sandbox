import { useParams } from 'react-router-dom';

function ComponentWrapper({ children }) {
  const params = useParams();

  console.log('!!! params: ', params);

  return <div>{children}</div>;
}

export default ComponentWrapper;
