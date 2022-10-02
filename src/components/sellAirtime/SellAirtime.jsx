import React, { useState, useEffect, useRef,useCallback } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./SellAirtime.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy } from 'react-icons/fa';


// import * as Yup from "yup";
// import { toast } from "react-toastify";
// import axios from "../../axios";

const SellAirtime = () => {
  const allNetworks = ["AIRTEL", "MTN", "ETISALAT", "GLO"];
  const [networks, setNetworks] = useState(allNetworks);

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

  //currency formater
  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });


  //handles event change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  //Input field validator
  const validate = (values) => {
    let errors = {};
    if (!values.phoneNumber) {
      errors.phoneNumber = "phone number is required";
    } else if (values.phoneNumber.length < 11) {
      errors.phoneNumber = "phone number can't be less than 11";
    } else if (values.phoneNumber.length > 11) {
      errors.phoneNumber = "phone number can't be more than 11";
    }
    if (!values.amountToSell) {
      errors.amountToSell = "amount to sell is required";
    } else if (values.amountToSell < 50) {
      errors.amountToSell = `Minimum amount is ${formatter.format(50)}`;
    } else if (values.amountToSell > 5000) {
      errors.amountToSell = `Maximum amount(${formatter.format(5000)}) exceeded`;
    }
    return errors;
  };

  //REFS
  const creditRef = useRef(null);
  const sellRef = useRef(null);
  const networkRef = useRef(null);
  const ussdRef = useRef(null);
  const destinationNumberRef = useRef(null);

  //ADMIN NUMBERS
  const airtelNumber = "AIRTEL-NUMBER";
  const mtnNumber = "MTN-NUMBER";
  const gloNumber = "GLO-NUMBER";
  const etisalatNumber = "ETISALAT-NUMBER";
  const [networkCode, setNetworkCode] = useState("network-code");
  const [recipientNumber, setRecipientNumber] = useState("recipient-number");

  const changeNetwork = useCallback(() => {
    /* do something */
    if (networkRef.current.value === "AIRTEL") {
        setNetworkCode("airtelCode");
        setRecipientNumber(airtelNumber);
      }
      if (networkRef.current.value === "MTN") {
        setNetworkCode("mtnCode");
        setRecipientNumber(mtnNumber);
      }
      if (networkRef.current.value === "GLO") {
        setNetworkCode("gloCode");
        setRecipientNumber(gloNumber);
      }
      if (networkRef.current.value === "ETISALAT") {
        setNetworkCode("etisalatCode");
        setRecipientNumber(etisalatNumber);
      }
  }, []);

//   const changeNetwork =()=>{
//     if (networkRef.current.value === "AIRTEL") {
//         setNetworkCode("airtelCode");
//         setRecipientNumber(airtelNumber);
//       }
//       if (networkRef.current.value === "MTN") {
//         setNetworkCode("mtnCode");
//         setRecipientNumber(mtnNumber);
//       }
//       if (networkRef.current.value === "GLO") {
//         setNetworkCode("gloCode");
//         setRecipientNumber(gloNumber);
//       }
//       if (networkRef.current.value === "ETISALAT") {
//         setNetworkCode("etisalatCode");
//         setRecipientNumber(etisalatNumber);
//       }
//   }

//   useEffect(() => {
//     changeNetwork()
//   }, [networks]);

  const handleSubmit = async (values) => {
    const creditedAmount = creditRef.current.value;
    const soldAirtime = sellRef.current.value;
    let ussdTransferCode = ussdRef.current.value;
    let adminNumber = destinationNumberRef.current.value;


    console.log("my values", {
        ...values,
        amountToReceive: creditedAmount,
        ussd: ussdTransferCode
      });

    if (networkRef.current.value === "AIRTEL") {
        networkRef.current.value = "AIRTEL"
      ussdTransferCode = `*111*${soldAirtime}*${airtelNumber}#`;
    }
    if (networkRef.current.value === "MTN") {
      ussdTransferCode = `*222*${soldAirtime}*${mtnNumber}#`;
    }
    if (networkRef.current.value === "ETISALAT") {
      ussdTransferCode = `*333*${soldAirtime}*${etisalatNumber}#`;
    }
    if (networkRef.current.value === "GLO") {
      ussdTransferCode = `*444*${soldAirtime}*${gloNumber}#`;
    }
   
    //send to API
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
    <option defaultvalue={network} key={key}>
      {network}
    </option>
  ));


  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
    if (copySuccess != "") {
      // copySuccess.style.color = "red";
      console.log("snazzyyooo");
    }
    setTimeout(setCopySuccess, 1500);
  }

  return (
    <div className="dashboard_frame">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched
          } = formik;
          return (
            <>
              <form className="form_container" onSubmit={handleSubmit}>
                <div style={{ width: "100%" }}>
                  <h3 className="selected_title">transfer airtime</h3>

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
                        className={
                          errors.network && touched.network
                            ? "input-error"
                            : "form_input"
                        }
                        id="network"
                        data-testid="network-input"
                        title="input-input"
                        type="text"
                        ref={networkRef}
                        defaultvalue={values.network}
                        onChange={changeNetwork}
                        //onChange={event => setMyNetwork(event.target.value)}
                      >
                        <option value={""} disabled>
                          Select network
                        </option>
                        {networkOptions}
                      </select>
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
                        className={
                          errors.phoneNumber && touched.phoneNumber
                            ? "input-error"
                            : "form_input"
                        }
                        placeholder="phone number"
                        id="phoneNumber"
                        name="phoneNumber"
                        data-testid="number-input"
                        value={values.phoneNumber}
                        onChange={handleChange}
                      />
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
                        className={
                          errors.amountToSell && touched.amountToSell
                            ? "input-error"
                            : "form_input"
                        }
                        placeholder="NGN"
                        id="amountToSell"
                        name="amountToSell"
                        ref={sellRef}
                        value={values.amountToSell}
                        onChange={handleChange}
                      />
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
                    <div className="input_container ussd">
                      <input
                        type="text"
                        className={
                          errors.ussd && touched.ussd
                            ? "input-error"
                            : "form_input filled"
                        }
                        placeholder="*780*amount*09088765433*5000#"
                        id="ussd"
                        name="ussd"
                        disabled
                        ref={ussdRef}
                        value={`*${networkCode}*${values.amountToSell}*${recipientNumber}#`}
                        onChange={handleChange}
                      />
                                <CopyToClipboard
     text={`*${networkCode}*${values.amountToSell}*${recipientNumber}#`}
     onCopy={() => alert("Copied")}>
       <span><FaRegCopy/></span>
     </CopyToClipboard>
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
                        className={
                          errors.amountToReceive && touched.amountToReceive
                            ? "input-error"
                            : "form_input filled"
                        }
                        placeholder="NGN"
                        id="amountToReceive"
                        name="amountToReceive"
                        disabled
                        ref={creditRef}
                        value={`${Math.round(
                          Number(values.amountToSell) * 0.7
                        )}`}
                        onChange={handleChange}
                      />
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
                        className={
                          errors.destinationPhoneNumber &&
                          touched.destinationPhoneNumber
                            ? "input-error"
                            : "form_input filled"
                        }
                        placeholder="destination phone number"
                        id="destinationPhoneNumber"
                        name="destinationPhoneNumber"
                        data-testid="recipient-number-input"
                        disabled
                        ref={destinationNumberRef}
                        value={values.destinationPhoneNumber}
                        onChange={handleChange}
                      />
                      {errors.destinationPhoneNumber &&
                        touched.destinationPhoneNumber && (
                          <span className="error">
                            {errors.destinationPhoneNumber}
                          </span>
                        )}
                    </div>
                  </div>
                  <p className="text">
                    After transferring the airtime, click on the "Send" button
                    below
                  </p>
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
