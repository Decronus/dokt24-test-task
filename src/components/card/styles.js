import styled from "styled-components";

export const CardWrap = styled.div`
    width: 275px;
    height: 100%;
    border: 1px solid #e8e8e8;
    border-radius: 14px;
    overflow: hidden;
`;

export const CardImg = styled.div`
    width: 100%;
    height: 264px;
    background-image: url("https://expertreviews.b-cdn.net/sites/expertreviews/files/2016/08/xbox_one_s_side_on.jpg");
    background-size: cover;
    background-postition: center;
    background-repeat: no-repeat;
    padding: 15px;
    display: flex;
    justify-content: space-between;
`;

export const CardInfo = styled.div`
    width: 100%;
    max-height: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
`;

export const CardPriceBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CardBage = styled.div`
    height: 24px;
    background: #9ca0c4;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 2px 6px;
`;

export const CardRatingAndLike = styled.div`
    display: flex;
    gap: 16px;

    & > svg {
        cursor: pointer;
    }
`;
