import './optionModal.scss';
import { useState, useRef, useEffect } from 'react';
import { FormInput, Button } from '../../components';
import { toast } from 'react-toastify';

const OptionModal = ({ transaction={ amt_sent: 2000, phonenumber: '0123456789' }, close }) => {
  const modalRef = useRef();
  const [amtSent, setAmtSent] = useState(transaction.amt_sent);
  const [amtToReceive, setAmtToReceive] = useState(0.7 * amtSent);

  const evalClose = (e) => {
    if (modalRef.current.contains(e.target)) return
    close();
  }

  useEffect(() => {
    setAmtToReceive(0.7 * amtSent);
  }, [amtSent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...transaction, amt_sent: amtSent, amtToReceive });
    // credit wallet
    toast.success("Wallet credited!");
    close();
  }

  const handleAmtSentChange = (e) => {
    const { value } = e.target;
    const numeric = value.split('N')[1]
    setAmtSent(numeric);
  }

  return (
    <div className='overlay' onClick={evalClose}>
      <div className='optionModal' ref={modalRef}>
        <h2 className='modalHeading'>Enter an amount</h2>
        <form className='modalForm' onSubmit={handleSubmit}>
          <FormInput label="Amount sent" value={"N" + amtSent} handleChange={handleAmtSentChange} />
          <FormInput label="Amount to receive" disabled={true} value={"N"+amtToReceive} />
          <Button type="submit">Confirm</Button>
        </form>
      </div>
    </div>
  )
}

export default OptionModal;