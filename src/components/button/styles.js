import styled from "styled-components";

export const ButtonWrap = styled.div`
    padding: 12px 28px;
    left: 141px;
    top: 134px;
    border: ${({ active }) => (active ? "1px solid rgba(0,0,0,0)" : "1px solid #b5b5b5")};
    color: ${({ active }) => (active ? "#FFFFFF" : "1px solid #b5b5b5")};
    background: ${({ active }) => (active ? "#9CA0C3" : null)};
    border-radius: 100px;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    }

    &:active {
        box-shadow: none;
    }
`;
