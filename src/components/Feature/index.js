import React from 'react';
import {FeatureContainer, FeatureButton} from './FeatureElements';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Sushi of the day</h1>
            <p>truff products of the day for 24/7 free</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature;
