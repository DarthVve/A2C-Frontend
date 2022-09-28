import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SellAirtime from "../SellAirtime"


    it('label should contain the text:network', () => {
      render(<SellAirtime />);
      const labelElement = screen.getByText(/select network/i);
      expect(labelElement).toBeInTheDocument();
    });
    
   

    it('label should contain the text:destination Phone Number', () => {
      render(<SellAirtime />);
      const labelElement = screen.getByText(/destination Phone Number/i);
      expect(labelElement).toBeInTheDocument();
    });
    it('component should contain a navbar', () => {
      render(<SellAirtime />);
      const labelElement = screen.getByRole(/nav/i);
      expect(labelElement).toBeInTheDocument();
    });
    
 

    //BELOW THIS LINE

     
describe("<SellAirtime />", () => {
 
    test('render email input', () => {
      render(<SellAirtime />);
   
      const inputEl = screen.getByTestId("network-input");
      expect(inputEl).toBeInTheDocument();
      expect(inputEl).toHaveAttribute("type", "text");
    });
   
    //phone number test
    test('pass valid phone number to test number input field', () => {
      render(<SellAirtime />);
   
      const inputEl = screen.getByTestId("number-input");
      userEvent.type(inputEl, "08111222333");
   
      expect(screen.getByTestId("number-input")).toHaveValue("08111222333");
      expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    });
    
    //Recipient phone number test
    test('pass valid recipient phone number to test number input field', () => {
      render(<SellAirtime />);
   
      const inputEl = screen.getByTestId("recipient-number-input");
      userEvent.type(inputEl, "08111222333");
   
      expect(screen.getByTestId("recipient-number-input")).toHaveValue("08111222333");
      expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    });

    //BELOW THIS LINE
    // test('rendering and submitting a basic Formik form', async () => {
    //     const onSubmit = jest.fn()
    //     render(<SellAirtime onSubmit={onSubmit} />)
    //     const user = userEvent.setup()
      
    //     await user.type(screen.getByLabelText(/network/i), 'airtel')
    //     await user.type(screen.getByLabelText(/phone number/i), '08111222333')
    //     await user.type(screen.getByLabelText(/amount to sell/i), '5000')
    //     await user.type(screen.getByLabelText(/ussd/i), '12345678933')
    //     await user.type(screen.getByLabelText(/amount to receive/i), '5000')
    //     await user.type(screen.getByLabelText(/destination phone number/i), '08111222333')
        
    //     await user.click(screen.getByRole('button', {name: /sell airtime/i}))
      
    //     await waitFor(() =>
    //       expect(onSubmit).toHaveBeenCalledWith({
    //         network: 'airtel',
    //         phone_number: '08111222333',
    //         amount_to_sell: '5000',
    //         ussd: '12345678933',
    //         amount_to_receive: '5000',
    //         destination_phone_number: '08111222333',
    //       }),
    //     )
    //   })
  


   
  });
 


