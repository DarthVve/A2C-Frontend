import React,{useRef} from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";


import "./SellAirtime.css";
import { useEffect } from "react";

const SellAirtime = () => {
    const networks = ["airtel", "mtn", "etisalat", "glo"];

    const sellRef = useRef('');
    useEffect(()=>{
        console.log(sellRef.current.value);
    },[])

    const validationSchema = Yup.object({
        network: Yup.string().required("Please select a network").oneOf(networks),
        phone_number: Yup.string()
            .min(11)
            .max(11)
            .required("Phone number can't be empty"),
        amount_to_sell: Yup.number()
            .min(100)
            .max(50000)
            .required("min-amount = N100, max-amount = N50000"),
        amount_to_receive: Yup.number()
            .min(100)
            .max(50000),
        ussd: Yup.string(),
        destination_phone_number: Yup.string()
            .min(11)
            .max(11).required("Phone number can't be empty"),
    });

    const initialValues = {
        network: "",
        phone_number: "",
        amount_to_sell: "",
        ussd: "",
        amount_to_receive: "",
        destination_phone_number: "",
    };

    const onSubmit = (values) => {
        console.log("DETAILS", values);
        toast.success(
            `Transaction Details:- N${values.amount_to_sell} sent to ${values.destination_phone_number}`,
            {
                position: toast.POSITION.TOP_CENTER,
            }
        );
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
                    onSubmit={async (values, { resetForm }) => {
                        await onSubmit(values);
                        resetForm();
                    }}
                >
                   
                    <Form className="form_container">
                        <div
                         
                            style={{
                                width: "100%",
                            }}
                        >
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
                                        ref={sellRef}
                                        
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
                                    />
                                    <ErrorMessage
                                        name="destination_phone_number"
                                        render={renderError}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="sell_btn" name="sellBtn">
                                sell airtime
                            </button>
                        </div>
                    </Form>
                </Formik>

            </div>
    );
};

export default SellAirtime;
