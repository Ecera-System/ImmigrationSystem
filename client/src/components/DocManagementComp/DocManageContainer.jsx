import React from 'react';
import './DocManageContainer.css'
import { Link } from 'react-router-dom';

function DocManageContainer() {
    return (
        <div className='docContainer'>
            <div className='docBox'>
                <h1>Documents Management</h1>
                <div>
                    <Link to={'/user-dashboard/doc-manage/personal-docs'} ><h2>Personal Documents</h2></Link>
                    <Link to={'/user-dashboard/doc-manage/financial-docs'} ><h2>Financial Documents</h2></Link>
                    <Link to={'/user-dashboard/doc-manage/educational-docs'} ><h2>Educational Documents</h2></Link>
                    <Link to={'/user-dashboard/doc-manage/employement-docs'} ><h2>Eployement Documents</h2></Link>
                    <Link to={'/user-dashboard/doc-manage/travel-docs'} ><h2>Travel Documents</h2></Link>
                    <Link to={'/user-dashboard/doc-manage/visa-docs'} ><h2>Visas</h2></Link>
                </div>
            </div>
        </div>
    )
}

export default DocManageContainer;
