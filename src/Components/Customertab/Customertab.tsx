import { displayCustomer } from '../../reduxStore/slices/customerSlice';
import { useAppDispatch } from '../../reduxStore/store';
import Text from '../common/Text';
import Header from '../common/Header';

type CustomerList = {
  id: number,
  customerName: string,
  description: string,
  isSelected?: boolean
}
const Customertab = ({ id, customerName, description, isSelected }: CustomerList) => {

  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(displayCustomer({ id, customerName, description }))
  }

  return (
    <div className={`tab-container ${isSelected ? "active" : ""}`} onClick={handleClick} >
      <Header text={customerName} />
      <Text content={description} />
    </div>
  );
};

export default Customertab;
