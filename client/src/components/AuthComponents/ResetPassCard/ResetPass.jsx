import React, { useState } from 'react';
import '../../../assets/styles/PassBox.css';

function ResetPass() {
    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });

    const [errors, setErrors] = useState({
        oldPassError: '',
        newPassError: '',
        confNewPassError: '',
    });

    const validateFormFun = () => {

        let validated = false;

        let errors = {
            oldPassError: '',
            newPassError: '',
            confNewPassError: '',
        }

        //adding name errors
        if (!formData.oldPassword) {
            errors.oldPassError = 'Old Password is required';
        }


        //adding password errors
        if (!formData.newPassword) {
            errors.newPassError = 'New Password is required';

        } else if ((formData.newPassword).length < 6) {
            errors.newPassError = 'Atleast 6 characters required';

        } else if (!(/[A-Z]/).test(formData.newPassword)) {
            errors.newPassError = 'Atleast 1 capital letter required';

        } else if (!(/[a-z]/).test(formData.newPassword)) {
            errors.newPassError = 'Atleast 1 small letter required';

        } else if (!(/[!@#$%^&*(),.?":{}|<>]/).test(formData.newPassword)) {
            errors.newPassError = 'Atleast 1 special char required';

        } else if (!(/\d/).test(formData.newPassword)) {
            errors.newPassError = "Atleast 1 numeric value required";

        } else if ((formData.newPassword).includes(' ')) {
            errors.newPassError = "Password can't contains space";

        } else if ((formData.newPassword) !== (formData.confirmNewPassword)) {
            errors.newPassError = "Password doesn't match";

        }

        //adding confirm password errors
        if (!formData.confirmNewPassword) {
            errors.confNewPassError = 'Confirm-password is required';

        } else if ((signUpData.conPassword) !== (signUpData.confirmNewPassword)) {
            errors.confNewPassError = "Confirm-password doesn't match";

        }

        setErrors(errors);
        if (!errors.oldPassError && !errors.newPassError && !errors.confNewPassError) {
            validated = true;
        }

        // reinitialize the errors as empty to get rid of unexpected errors
        errors = {
            oldPassError: '',
            newPassError: '',
            confNewPassError: '',
        }

        return validated; //return true if successfully validate else return false
    }

    //function to handle the input data
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div className='passContainer'>
            <div className='passCard'>
                <h1>Reset Password</h1>
                <form>
                    <div>
                        <label htmlFor="old-pass">Old Password</label>
                        <input type="text" id='old-pass' name='oldPassword' onChange={handleChange} placeholder='Enter Old Password' />
                        <div className="error">
                            {
                                errors.oldPassError && errors.oldPassError
                            }
                        </div>
                    </div>
                    <div>
                        <label htmlFor="old-pass">New Password</label>
                        <input type="text" id='old-pass' name='newPassword' onChange={handleChange} placeholder='Enter New Password' />
                        <div className="error">
                            {
                                errors.newPassError && errors.newPassError
                            }
                        </div>
                    </div>
                    <div>
                        <label htmlFor="old-pass">Confirm New Password</label>
                        <input type="text" id='old-pass' name='confirmNewPassword' onChange={handleChange} placeholder='Confirm New Password' />
                        <div className="error">
                            {
                                errors.confNewPassError && errors.confNewPassError
                            }
                        </div>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ResetPass