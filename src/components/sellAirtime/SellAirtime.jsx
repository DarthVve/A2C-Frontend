import React, { useState, useEffect, useRef } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import "./SellAirtime.css";
import axios from "../../axios";


const SellAirtime = () => {
    const networks = ["AIRTEL", "MTN", "ETISALAT", "GLO"];
    

    const adminNUmbers = ["number1", "number2", "number3", "number4"];

    const initialValues = {
        network: "",
        phoneNumber: "",
        amountToSell: "",
        ussd: "",
        amountToReceive: "",
        destinationPhoneNumber: "",
    };



    const [formValues, setFormValues] = useState(initialValues);


    const formatter = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });


    // const validationSchema = Yup.object({
    //     network: 
    //         Yup.string().required("Please select a network").oneOf(networks),
    //     phoneNumber: 
    //         Yup.string().min(11, "Phone number can't be less than 11 characters")
    //         .max(11, "Phone number can't be more than 11 characters")
    //         .required("Phone number can't be empty"),
    //     amountToSell: 
    //         Yup.number()
    //         .min(50, `Minimum amount is ${formatter.format(50)}`)
    //         .max(5000,`exceeded maximum amount(${formatter.format(5000)})`)
    //         .required(`min-amount = ${formatter.format(50)}, max-amount = ${formatter.format(5000)}`),
    //     amountToReceive: 
    //         Yup.number()
    //         .min(50, `Minimum amount is ${formatter.format(50)}`)
    //         .max(5000, `exceeded maximum amount(${formatter.format(5000)})`),
    //     ussd: 
    //         Yup.string(),
    //     destinationPhoneNumber: 
    //         Yup.string()
    //         .min(11, "Phone number can't be less than 11 characters")
    //         .max(11, "Phone number can't be more than 11 characters")
    // });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };


    const validate = (values) => {
        let errors = {};

        if (!values.network) {
            errors.network = "network is required";
        } else if (!networks.includes(values.network)) {
            errors.network = "Invalid network";
        }
        if (!values.phoneNumber) {
            errors.phoneNumber = "phoneNumber is required";
        } else if (values.phoneNumber.length < 11) {
            errors.phoneNumber = "phoneNumber too short";
        }
     else if (values.phoneNumber.length > 11) {
            errors.phoneNumber = "phoneNumber too long";
        }
        if (!values.amountToSell) {
            errors.amountToSell = "amountToSell is required";
        } else if (values.amountToSell < 50) {
            errors.amountToSell = "amountToSell too short";
        }
        else if (values.amountToSell > 5000) {
            errors.amountToSell = "amountToSell exceeded limit";
        }

        return errors;
    };

    const [copySuccess, setCopySuccess] = useState('');

    const creditRef = useRef(null);
    const networkRef = useRef(null);
    const ussdRef = useRef(null);
    const destinationNumberRef = useRef(null);

    const airtelNumber = '080100000000'
    const mtnNumber = '080200000000'
    const gloNumber = '080300000000'
    const etisalatNumber = '080400000000'

    function copyToClipboard(e) {
        ussdRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
      };

    const onSubmit = async (values) => {
        const creditedAmount = creditRef.current.value;
        let ussdAdminNum = ussdRef.current.value;
        let adminNumber = destinationNumberRef.current.value;

        if(networkRef.current.value === "AIRTEL"){
            ussdAdminNum = `*700*${creditedAmount}*${airtelNumber}#`
        }

        console.log('my values', {...values, "creditedAmount": creditedAmount, "ussdAdminNum": ussdAdminNum});


        // try {
        //     const res = await axios.post("/transaction", values)
        //     if (res.status === 200) {
        //         toast.success(
        //             `Transaction Details: N${values.amountToSell} sent to ${values.destinationPhoneNumber}`,
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
                // initialValues={initialValues}
                // validationSchema={validationSchema}
                // onSubmit={(values, { resetForm }) => {
                //     onSubmit(values);
                //     resetForm();
                // }}
                initialValues={initialValues}
                validate={validate}
                onSubmit={onSubmit}
            >
                {(formik) => {
                    const {
                        values,
                        handleChange,
                        handleSubmit,
                        errors,
                        touched,
                        handleBlur,
                        isValid,
                        dirty
                    } = formik;
                    return (
                        <>
                         {
       /* Logical shortcut for only displaying the 
          button if the copy command exists */
       document.queryCommandSupported('copy') &&
        <div>
          <button onClick={copyToClipboard}>Copy</button> 
          {copySuccess}
        </div>
      }
                        <form className="form_container" onSubmit={handleSubmit}>
                            <div style={{ width: "100%" }}>
                                <h3 className="selected_title">sell airtime</h3>

                                {/* NETWORK */}
                                <div className="form_group">
                                    <div className="label_container">
                                        <label className="form_label" htmlFor="network">
                                            Network
                                        </label>
                                    </div>
                                    <div className="input_container">
                                        <select
                                            name="network"
                                            as="select"
                                            // className="form_input"
                                            className={errors.network && touched.network ?
                                                "input-error" : null}
                                            id="network"
                                            data-testid="network-input"
                                            title="input-input"
                                            type="text"
                                            ref={networkRef}
                                            value={values.network}
                                            onChange={handleChange}
                                        >
                                            <option value={""} disabled>
                                                Select network
                                            </option>
                                            {networkOptions}
                                        </select>
                                        {/* <ErrorMessage data-testid="error-msg" name="network" render={renderError} /> */}
                                        {errors.network && touched.network && (
                                            <span className="error">{errors.network}</span>
                                        )}
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
                                        <input
                                            type="text"
                                            // className="form_input"
                                            className={errors.phoneNumber && touched.phoneNumber ?
                                                "input-error" : null}
                                            placeholder="phone number"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            data-testid="number-input"
                                            value={values.phoneNumber}
                                            onChange={handleChange}
                                        />
                                        {/* <ErrorMessage data-testid="error-msg" name="phoneNumber" render={renderError} /> */}
                                        {errors.phoneNumber && touched.phoneNumber && (
                                            <span className="error">{errors.phoneNumber}</span>
                                        )}

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
                                        <input
                                            type="text"
                                            // className="form_input"
                                            className={errors.amountToSell && touched.amountToSell ?
                                                "input-error" : null}
                                            placeholder="NGN"
                                            id="amountToSell"
                                            name="amountToSell"
                                            value={values.amountToSell}
                                            onChange={handleChange}

                                        />
                                        {/* <ErrorMessage name="amountToSell" render={renderError} /> */}
                                        {errors.amountToSell && touched.amountToSell && (
                                            <span className="error">{errors.amountToSell}</span>
                                        )}
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
                                        <input
                                            type="text"
                                            // className="form_input filled"
                                            className={errors.ussd && touched.ussd ?
                                                "input-error" : null}
                                            placeholder="*780*amount*09088765433*5000#"
                                            id="ussd"
                                            name="ussd"
                                            ref={ussdRef}
                                            // disabled
                                            // value='snazzyy malcolm'
                                            value={values.ussd}
                                            onChange={handleChange}
                                        />
                                        {/* <ErrorMessage name="ussd" render={renderError} /> */}
                                        {errors.ussd && touched.ussd && (
                                            <span className="error">{errors.ussd}</span>
                                        )}
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
                                        <input
                                            type="text"
                                            // className="form_input filled"
                                            className={errors.amountToReceive && touched.amountToReceive ?
                                                "input-error" : null}

                                            placeholder="NGN"
                                            id="amountToReceive"
                                            name="amountToReceive"
                                            disabled
                                            ref={creditRef}
                                            value={`${Number(values.amountToSell) * 0.7}`}
                                            onChange={handleChange}

                                        />
                                        {/* <ErrorMessage name="amountToReceive" render={renderError} /> */}

                                        {errors.amountToReceive && touched.amountToReceive && (
                                            <span className="error">{errors.amountToReceive}</span>
                                        )}
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
                                        <input
                                            type="text"
                                            // className="form_input filled"
                                            className={errors.destinationPhoneNumber && touched.destinationPhoneNumber ?
                                                "input-error" : null}
                                            placeholder="destination phone number"
                                            id="destinationPhoneNumber"
                                            name="destinationPhoneNumber"
                                            data-testid="recipient-number-input"
                                            disabled
                                            ref={destinationNumberRef}
                                            value={values.destinationPhoneNumber}
                                            onChange={handleChange}
                                        />
                                        {/* <ErrorMessage
                                            name="destinationPhoneNumber"
                                            render={renderError}
                                        /> */}
                                        {errors.destinationPhoneNumber && touched.destinationPhoneNumber && (
                                            <span className="error">{errors.destinationPhoneNumber}</span>
                                        )}
                                    </div>
                                </div>
                                <p className="text">After transferring the airtime, click on the "Send" button below</p>
                                <button type="submit" className="sell_btn" name="sellBtn">
                                    send
                                </button>
                            </div>
                        </form>
                        </>
                    );
                }}
            </Formik>
        </div>
    );
};

export default SellAirtime;
