import React from 'react'
import * as Yup from 'yup'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import './withdrawbalance.css'
import { toast } from 'react-toastify'
export default function WithdrawBalance() {

    const accounts = [
        'Current',
        'Corporate',
        'Domiciliary',
        'Fixed Deposit',
        'Non Resident'
    ]

    const validationSchema = Yup.object({
        account: Yup.string().required('Please Select An Account').oneOf(accounts),
        account_Name: Yup.string().required('Please Enter Account Name'),
        account_Number: Yup.string().min(10).max(10).required('Please Enter An Account Number'),
        amount: Yup.string().required('Amount is required'),
        password: Yup.string().required('Password is required')
    })

    const initialValues = {
        account: '',
        account_Name: '',
        account_Number: '',
        amount: '',
        password:''
    }

    const onSubmit = (values) => {
        toast.success('Withdrawal Successful')
    }



    const networkOPtions = accounts.map((account, key) => 
    <option value={account}  key={key} > {account} </option>
    )

const renderError = (message) => <p className='warning'>{ message }</p>

    return (

        <div className='withdraw-container'>
        <div className="withdraw-body">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={async (values, { resetForm }) => {
                await onSubmit(values)
                resetForm()
            }}>
            <Form className='user-form'>
                    <label className='select_account_label'> Select Account</label>
                    <Field
                        name='account'
                        as='select'
                        className='select'
                        type='text'
                        placeholder='Select'
                        id='dropdown'       
                    >
                    <option className='select_account_dropdown' value={''}>Select</option>
                        {networkOPtions}
                    </Field>

                    <ErrorMessage name='account' render={renderError}/>

                    <label className='select_account_label'>Account Name</label>
                    <Field
                        type='text'
                        placeholder='BabtundeOla'
                        className='withdraw_balance_input'
                        name='account_Name'
                    />
                    <ErrorMessage name='account_Name' render={renderError}/>

                    <label className='select_account_label'>Account Number</label>
                    <Field
                        type='text'
                        placeholder='2233334531'
                        className='withdraw_balance_input'
                        name='account_Number'
                    />
                    <ErrorMessage name='account_Number' render={renderError} />
                    
                    <label className='select_account_label'>Amount</label>
                    <Field
                        type='text'
                        placeholder='NGN'
                        className='withdraw_balance_input'
                        name='amount'
                    />
                    <ErrorMessage name='amount' render={renderError} />
                    
                    <label className='select_account_label'>Password</label>
                    <Field
                        type='password'
                        placeholder='Password'
                        className='withdraw_balance_input'
                        name='password'
                    />
                    <ErrorMessage name='password' render={renderError}/>
                <button className='withdrawBtn' onClick>Withdraw</button> 

            </Form>

            </Formik>
        </div>
    </div>
    
)
}
