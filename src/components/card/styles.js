import styled from "styled-components";

export const CardWrap = styled.div`
    min-width: 250px;
    height: 100%;
    border: 1px solid #e8e8e8;
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

export const CardImg = styled.div`
    width: 100%;
    height: 300px;
    background-image: ${({ img }) => (img ? `url(${img})` : `url("https://shop.ki43.ru/image/product_no_image.png")`)};
    background-size: 60%;
    background-position: center;
    background-repeat: no-repeat;
    padding: 15px;
    display: flex;
    justify-content: space-between;
`;

export const CardInfo = styled.div`
    width: 100%;
    height: 100%;
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
    background: ${({ color }) => color || "#5161EB"};
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 2px 14px;
`;

export const CardRatingAndLike = styled.div`
    display: flex;
    gap: 16px;

    & > svg {
        &:hover {
            transform: scale(1.1);
        }

        cursor: pointer;
        path {
            fill: ${({ like }) => (like ? "#BF5A5A" : "none")};
            stroke: ${({ like }) => (like ? "none" : "#B5B5B5")};
        }
    }
`;
