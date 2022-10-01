import React, { useRef, useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import "./SellAirtime.css";
import axios from "../../axios";


const SellAirtime = () => {
    const networks = ["airtel", "mtn", "etisalat", "glo"];

    const adminNUmbers = ["number1", "number2", "number3", "number4"];
    
    const initialValues = {
        network: "",
        phone_number: "",
        amount_to_sell: "",
        ussd: "",
        amount_to_receive: "",
        destination_phone_number: "",
    };



    const [formValues, setFormValues] = useState(initialValues);


    const formatter = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 0, 
        maximumFractionDigits: 0, 
      });
      
      
    const validationSchema = Yup.object({
        network: 
            Yup.string().required("Please select a network").oneOf(networks),
        phone_number: 
            Yup.string().min(11, "Phone number can't be less than 11 characters")
            .max(11, "Phone number can't be more than 11 characters")
            .required("Phone number can't be empty"),
        amount_to_sell: 
            Yup.number()
            .min(50, `Minimum amount is ${formatter.format(50)}`)
            .max(5000,`exceeded maximum amount(${formatter.format(5000)})`)
            .required(`min-amount = ${formatter.format(50)}, max-amount = ${formatter.format(5000)}`),
        amount_to_receive: 
            Yup.number()
            .min(50, `Minimum amount is ${formatter.format(50)}`)
            .max(5000, `exceeded maximum amount(${formatter.format(5000)})`),
        ussd: 
            Yup.string(),
        destination_phone_number: 
            Yup.string()
            .min(11, "Phone number can't be less than 11 characters")
            .max(11, "Phone number can't be more than 11 characters")
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
      };

    const onSubmit = async(values) => {
        console.log('my values',values);

        // try {
        //     const res = await axios.post("/transaction", values)
        //     if (res.status === 200) {
        //         toast.success(
        //             `Transaction Details: N${values.amount_to_sell} sent to ${values.destination_phone_number}`,
        //             {position: toast.POSITION.TOP_CENTER,
        //             }
        //         );
        //         localStorage.setItem("transactionDetails", JSON.stringify(res.data));
        //   
        //     } else {
        //         toast.error(res.data.msg);
        //     }
        // }
        // catch (err) {
        //     toast.error(err.response?.data?.msg || "Something went wrong");
        // }
        
    };

    const networkOptions = networks.map((network, key) => (
        <option value={network} key={key}>
            {network}
        </option>
    ));

    const renderError = (message) => <p className="notification">{message}</p>;

    return (
            <div className="dashboard_frame">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        onSubmit(values);
                        resetForm();
                    }}
                >
                    <Form className="form_container">
                        <div style={{width: "100%"}}>
                            <h3 className="selected_title">sell airtime</h3>

                            {/* NETWORK */}
                            <div className="form_group">
                                <div className="label_container">
                                    <label className="form_label" htmlFor="network">
                                        Network
                                    </label>
                                </div>
                                <div className="input_container">
                                    <Field
                                        name="network"
                                        as="select"
                                        className="form_input"
                                        id="network"
                                        data-testid="network-input"
                                        title="field-input"
                                        type="text"
                                        value={formValues.network}
                                        onChange={handleChange}
                                    >
                                        <option value={""} disabled>
                                            Select network
                                        </option>
                                        {networkOptions}
                                    </Field>
                                    <ErrorMessage data-testid="error-msg" name="network" render={renderError} />
                                </div>
                            </div>

                            {/* PHONE NUMBER */}
                            <div className="form_group">
                                <div className="label_container">
                                    <label className="form_label" htmlFor="phone_number">
                                        Phone Number
                                    </label>
                                </div>
                                <div className="input_container">
                                    <Field
                                        type="text"
                                        className="form_input"
                                        placeholder="phone number"
                                        id="phone_number"
                                        name="phone_number"
                                        data-testid="number-input"
                                        value={formValues.phone_number}
                                        onChange={handleChange}
                                    />
                                    <ErrorMessage data-testid="error-msg" name="phone_number" render={renderError} />
                                </div>
                            </div>

                            {/* AMOUNT TO SELL */}
                            <div className="form_group">
                                <div className="label_container">
                                    <label className="form_label" htmlFor="amount_to_sell">
                                        Amount to Sell
                                    </label>
                                </div>
                                <div className="input_container">
                                    <Field
                                        type="text"
                                        className="form_input"
                                        placeholder="NGN"
                                        id="amount_to_sell"
                                        name="amount_to_sell"
                                        value={formValues.amount_to_sell}
                                        onChange={handleChange}
                                        
                                    />
                                    <ErrorMessage name="amount_to_sell" render={renderError} />
                                </div>
                            </div>

                            {/* USD */}
                            <div className="form_group">
                                <div className="label_container">
                                    <label className="form_label" htmlFor="ussd">
                                        USSD
                                    </label>
                                </div>
                                <div className="input_container">
                                    <Field
                                        type="text"
                                        className="form_input filled"
                                        placeholder="*780*amount*09088765433*5000#"
                                        id="ussd"
                                        name="ussd"
                                        disabled
                                        value={formValues.ussd}
                                        onChange={handleChange}
                                    />
                                    <ErrorMessage name="ussd" render={renderError} />
                                </div>
                            </div>

                            {/* AMOUNT TO RECEIVE */}
                            <div className="form_group">
                                <div className="label_container">
                                    <label className="form_label" htmlFor="amount_to_receive">
                                        Amount to Receive
                                    </label>
                                </div>
                                <div className="input_container">
                                    <Field
                                        type="text"
                                        className="form_input filled"
                                        placeholder="NGN"
                                        id="amount_to_receive"
                                        name="amount_to_receive"
                                        disabled
                                        value={`${Number(formValues.amount_to_sell)*0.7}`}
                                        onChange={handleChange}
                                        
                                    />
                                    <ErrorMessage name="amount_to_receive" render={renderError} />
                                </div>
                            </div>

                            {/* DESTINATION PHONE NUMBER */}
                            <div className="form_group">
                                <div className="label_container">
                                    <label
                                        className="form_label"
                                        htmlFor="destination_phone_number"
                                    >
                                        Destination Phone Number
                                    </label>
                                </div>
                                <div className="input_container">
                                    <Field
                                        type="text"
                                        className="form_input filled"
                                        placeholder="destination phone number"
                                        id="destination_phone_number"
                                        name="destination_phone_number"
                                        data-testid="recipient-number-input"
                                        // disabled
                                        value={formValues.destination_phone_number}
                                            onChange={handleChange}
                                    />
                                    <ErrorMessage
                                        name="destination_phone_number"
                                        render={renderError}
                                    />
                                </div>
                            </div>
                            <p className="text">After transferring the airtime, click on the "Send" button below</p>
                            <button type="submit" className="sell_btn" name="sellBtn">
                                send
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
    );
};

export default SellAirtime;
