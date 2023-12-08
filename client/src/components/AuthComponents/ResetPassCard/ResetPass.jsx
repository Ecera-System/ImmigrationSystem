import React from 'react';
import '../../../assets/styles/PassBox.css';

function ResetPass() {
    return (
        <div className='passContainer'>
            <div className='passCard'>
                <h1>Reset Password</h1>
                <form>
                    <div>
                        <label htmlFor="old-pass"></label>
                        <input type="text" id='old-pass' placeholder='Enter Old Password' />
                    </div>
                    <div>
                        <label htmlFor="old-pass"></label>
                        <input type="text" id='old-pass' placeholder='Enter New Password' />
                    </div>
                    <div>
                        <label htmlFor="old-pass"></label>
                        <input type="text" id='old-pass' placeholder='Confirm New Password' />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ResetPass