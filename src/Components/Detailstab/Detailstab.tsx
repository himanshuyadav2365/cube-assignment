import { useSelector } from 'react-redux';
import { getSelectedCustomer } from '../../reduxStore/slices/customerSlice';
import Header from '../common/Header';
import PhotoGrid from '../PhotoGallery/PhotoGrid';
import Text from '../common/Text';

const Detailstab = () => {

  const { customerName, id, description } = useSelector(getSelectedCustomer)

  return (
    <div className=' flex-col items-center justify-center w-4/5  mx-auto py-16'>
      <Header bold text={customerName} />
      <div >
        <Text content={description} />
      </div>
      <PhotoGrid id={id} />
    </div>
  );
};

export default Detailstab;
