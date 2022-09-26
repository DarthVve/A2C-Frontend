import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";

import LogoName from "../../assets/Frame-8589.png";
import "./SellAirtime.css";

const SellAirtime = () => {
    const [index, setIndex] = useState(0);
    const networks = ["airtel", "mtn", "etisalat", "glo"];

    //YUP STUFF STARTS
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
            .max(50000)
            .required("min-amount = N100, max-amount = N50000"),
        ussd: Yup.string().required(),
        destination_phone_number: Yup.string()
            .min(11)
            .max(11)
            .required("Recipient number can't be empty"),
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
            `Transaction Details:- N${values.amount_to_receive} sent to ${values.destination_phone_number}`,
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
    const tabs = [
        "sell airtime",
        "withdraw balance",
        "manage bank account",
        "transaction history",
    ];

    return (
        <div className="dashboard">
            <nav className="navbar">
                <div className="logo_container">
                    <img src={LogoName} alt="logo" />
                </div>
                <div className="avatar_container">
                    <img
                        alt="avatar"
                        src="data:image/png;base64,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"
                    />
                    <h3>Snazzy</h3>
                </div>
            </nav>
            <div className="pink_frame">&nbsp;</div>
            <div className="dashboard_frame">
                <h4 className="dashboard_frame_title">dashboard</h4>
                <div className="dashboard_frame_red">
                    <h4 className="title">Wallet balance</h4>
                    <h1 className="amount">N21,350.00</h1>
                    <div className="active">
                        <h6>Account is active</h6>
                    </div>
                </div>

                <div className="nav_container">
                    <div className="nav_list">
                        <p onClick={() => setIndex(0)} className="list_item">
                            Sell airtime
                        </p>
                        <p onClick={() => setIndex(1)} className="list_item">
                            Withdraw balance
                        </p>
                        <p onClick={() => setIndex(2)} className="list_item">
                            Manage bank account
                        </p>
                        <p onClick={() => setIndex(3)} className="list_item">
                            Transaction history
                        </p>
                    </div>
                </div>
                <h2 className="selected_title">{tabs[index]}</h2>
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
                                        // value={initialValues.amount_to_receive}
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
        </div>
    );
};

export default SellAirtime;
