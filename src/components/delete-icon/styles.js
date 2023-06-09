import styled from "styled-components";

export const DeleteIconWrap = styled.div`
    width: 24px;
    height: 24px;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(1.5px);
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        svg {
            path {
                fill: #9ca0c3;
            }
        }
    }
`;
