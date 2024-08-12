import './customertab.css'
import { displayCustomer } from '../../reduxStore/slices/customerSlice';
import { useAppDispatch } from '../../reduxStore/store';

type CustomerList={
  id:number,
  customerName:string,
  description:string,
  isSelected?:boolean
}
const Customertab  = ({id,customerName,description,isSelected} :CustomerList) => {  
  
  const dispatch=useAppDispatch()
  const handleClick=()=>{
    dispatch(displayCustomer({id,customerName,description}))
  }

  return (
    <div className={`tab-container ${isSelected ? "active" : ""}`} onClick={handleClick} >
      <h2>{customerName}</h2>
      <p>{description}</p>  
    </div>
  );
};

export default Customertab;
