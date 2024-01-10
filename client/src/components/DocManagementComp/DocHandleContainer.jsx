import React from 'react';
import './DocManageContainer.css';
import { Link, useParams } from 'react-router-dom';

const DocHandleContainer = () => {
    const {docType}= useParams();
    return (
        <div className='docContainer'>
            <div className='docBox'>
            <h1>{docType}</h1>
                <section>
                    <Link to={'/'}>Upload Documents</Link>
                    <Link to={'/'}>See Uploaded Docs</Link>
                    <Link to={'/'}>Documents Status</Link>
                </section>
            </div>
        </div>
    )
}

export default DocHandleContainer
