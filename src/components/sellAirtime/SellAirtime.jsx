import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";

import "./SellAirtime.css";

const SellAirtime = () => {
    const networks = ["airtel", "mtn", "etisalat", "glo"];
    const initialValues = {
        network: "",
        phoneNumber: "",
        amountToSell: "",
        ussd: "",
        amountToReceive: "",
        destinationPhoneNumber: "",
    };


    //YUP STUFF STARTS
    const validationSchema = Yup.object({
        network: Yup.string().required("Please select a network").oneOf(networks),
        phoneNumber: Yup.string()
            .min(11)
            .max(11)
            .required("Phone number can't be empty"),
        amountToSell: Yup.number()
            .min(100)
            .max(50000)
            .required("min-amount = N100, max-amount = N50000"),
        amountToReceive: Yup.number()
            .min(100)
            .max(50000)
            .required("min-amount = N100, max-amount = N50000"),
        ussd: Yup.string().required(),
        destinationPhoneNumber: Yup.string()
            .min(11)
            .max(11)
            .required("Recipient number can't be empty"),
    });

    const onSubmit = (values) => {
        console.log("DETAILS", values);
        toast.success(
            `Transaction Details:- N${values.amountToReceive} sent to ${values.destinationPhoneNumber}`,
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
    //YUP STUFF ENDS

    return (
    <div className="container" >
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
                            className="container"
                            style={{
                                width: "100%",
                            }}
                        >
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
                                    >
                                        <option value={""} disabled>
                                            Select network
                                        </option>
                                        {networkOptions}
                                    </Field>
                                    <ErrorMessage name="network" render={renderError} />
                                </div>
                            </div>

                            {/* PHONE NUMBER */}

                            <div className="form_group">
                                <div className="label_container">
                                    <label className="form_label" htmlFor="phoneNumber">
                                        Phone Number
                                    </label>
                                </div>
                                <div className="input_container">
                                    <Field
                                        type="text"
                                        className="form_input"
                                        placeholder="phone number"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                    />
                                    <ErrorMessage name="phoneNumber" render={renderError} />
                                </div>
                            </div>

                            {/* AMOUNT TO SELL */}

                            <div className="form_group">
                                <div className="label_container">
                                    <label className="form_label" htmlFor="amountToSell">
                                        Amount to Sell
                                    </label>
                                </div>
                                <div className="input_container">
                                    <Field
                                        type="text"
                                        className="form_input"
                                        placeholder="NGN"
                                        id="amountToSell"
                                        name="amountToSell"
                                    />
                                    <ErrorMessage name="amountToSell" render={renderError} />
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
                                    <label className="form_label" htmlFor="amountToReceive">
                                        Amount to Receive
                                    </label>
                                </div>
                                <div className="input_container">
                                    <Field
                                        type="text"
                                        className="form_input filled"
                                        placeholder="NGN"
                                        id="amountToReceive"
                                        name="amountToReceive"
                                        // THIS WAS MEANT TO GET THE VALUE FROM THE AMOUNT-TO-SELL INPUT BOX
                                        //AND PASS IT INTO THE AMOUNT TO RECEIVE INPUT BOX
                                        // value={initialValues.amountToReceive}
                                    />
                                    <ErrorMessage name="amountToReceive" render={renderError} />
                                </div>
                            </div>

                            {/* DESTINATION PHONE NUMBER */}

                            <div className="form_group">
                                <div className="label_container">
                                    <label
                                        className="form_label"
                                        htmlFor="destinationPhoneNumber"
                                    >
                                        Destination Phone Number
                                    </label>
                                </div>
                                <div className="input_container">
                                    <Field
                                        type="text"
                                        className="form_input filled"
                                        placeholder="destination phone number"
                                        id="destinationPhoneNumber"
                                        name="destinationPhoneNumber"
                                    />
                                    <ErrorMessage
                                        name="destinationPhoneNumber"
                                        render={renderError}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="sell_btn">
                                sell airtime
                            </button>
                        </div>
                    </Form>
                </Formik>

            </div>
            </div>
    );
};

export default SellAirtime;
