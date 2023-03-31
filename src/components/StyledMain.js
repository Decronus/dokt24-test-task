import styled from "styled-components";

export const MainWrap = styled.div`
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: calc(50% - 580px);
    padding-right: calc(50% - 580px);
    max-width: 1160pх;

    @media (max-width: 1200px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const MainCardsWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 560px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const MainFilterWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 30px;
`;
