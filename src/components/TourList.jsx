import React, { useEffect, useState } from 'react';
import Tour from './Tour';

const url = `${process.env.REACT_APP_API_URL}`;

function TourList() {
    const [tourInfo, setTourInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setTourInfo(data);
        setLoading(false);
    };
    useEffect(() => {
        getData();
    }, []);

    const handleNotInterestedButton = (tourId) => {
        const newTourList = tourInfo.filter((tour) => tour.id !== tourId);
        setTourInfo(newTourList);
    };
    return (
        <>
            {loading ? (
                <h3 className="text-center">Loading...</h3>
            ) : (
                tourInfo.map((tour) => {
                    const { id, name, info, image, price } = tour;
                    return (
                        <Tour
                            key={id}
                            id={id}
                            name={name}
                            image={image}
                            price={price}
                            info={info}
                            handleClick={handleNotInterestedButton}
                        />
                    );
                })
            )}
            {tourInfo.length === 0 && loading === false ? (
                <button
                    className="btn btn-primary btn-block text-center"
                    type="button"
                    onClick={() => getData()}
                >
                    Reload All Info
                </button>
            ) : null}
        </>
    );
}

export default TourList;
