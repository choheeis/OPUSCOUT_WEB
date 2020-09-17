import React from 'react';
import styled from 'styled-components';
import ItemImg from '../../resource/item.svg'
import KeyWordImg from '../../resource/keyword.svg'
import CategoryImg from '../../resource/category.svg'
import HotImg from '../../resource/hot.svg'

const FeatureStyle = styled.div`
    width: 300px;
    flex: 1 1 auto;
    margin: 50px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);
    
`;

const ImgSection = styled.div`
    background: #D3E0FF4D;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;

    .img {
        width: 150px;
        height: 150px;
    }
`;

const Title = styled.div`
    margin-top: 40px;
    text-align: center;
    color: #000000;
    font-size: 20px;
    font-weight: bold;
`;

const Description = styled.div`
    display: flex;
    margin: 0 auto;
    margin-top: 15px;
    text-align: center;
    color: #333333;
    font-size: 15px;
    width: 200px;
`;

function Feature({ name, description, img}) {
    var imgSrc = '';
    if (img === "item") {
        imgSrc = ItemImg
    }
    if (img === "keyword") {
        imgSrc = KeyWordImg
    }
    if (img === "category") {
        imgSrc = CategoryImg
    }
    if (img === "hot") {
        imgSrc = HotImg
    }
    return(
        <>
            <FeatureStyle>
                <ImgSection>
                    <img className="img" src={imgSrc} alt="아이템 발굴 아이콘"></img> 
                </ImgSection>
                <Title>{name}</Title>
                <Description>{description}</Description>
            </FeatureStyle>
        </>
    )
}

export default Feature;