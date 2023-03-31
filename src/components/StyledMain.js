import styled from "styled-components";

export const MainWrap = styled.div`
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: calc(50% - 580px);
    padding-right: calc(50% - 580px);
    max-width: 1160pх;
`;

export const MainCardsWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`;
