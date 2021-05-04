import React, { useState } from 'react';

function Tour({ name, image, info, price, id, handleClick }) {
    const [readMore, setReadMore] = useState(false);
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    if (isAlertOpen) {
        setTimeout(() => {
            setIsAlertOpen(false);
        }, 1500);
    }

    return (
        <div className="col-md-6 col-lg-4">
            <div className="card">
                <img src={image} alt={name} className="card-img-top" />
                <div className="card-body">
                    <div className="card-title font-weight-bold">{name}</div>
                    <div className="card-text">
                        {readMore ? info : `${info.substring(0, 200)}...`}
                        <span
                            className="text-primary"
                            role="button"
                            tabIndex="-1"
                            onClick={() => {
                                setReadMore(!readMore);
                            }}
                        >
                            {readMore ? ' show less' : ' read more'}
                        </span>
                    </div>
                    <div className="card-footer text-center">
                        {isAlertOpen && <Alert />}
                        <button
                            type="button"
                            className="btn btn-outline-primary mt-3"
                            onClick={() => setIsAlertOpen(!isAlertOpen)}
                        >
                            Price: {price} USD
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary mt-3 ml-3"
                            onClick={() => handleClick(id)}
                        >
                            Not Interested
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tour;

function Alert() {
    return <p className="alert alert-danger">Really Bro? Please go back to your work!</p>;
}
