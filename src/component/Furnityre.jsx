import React from 'react';

const FurnitureList = ({ furniture }) => (
    <div className="furniture-list">
        {furniture.map(item => (
            <div key={item.id} className="furniture-item">
                <img src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
        ))}
    </div>
);

export default FurnitureList;
