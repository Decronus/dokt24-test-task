import * as S from "./styles";

function RatingBlock({ rating }) {
    return (
        <S.RatingBlockWrap>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.97553 3.84549L7.5 2.38197L7.02447 3.84549L6.12642 6.60942H3.22025H1.6814L2.92635 7.51393L5.27749 9.22214L4.37944 11.9861L3.90391 13.4496L5.14886 12.5451L7.5 10.8369L9.85114 12.5451L11.0961 13.4496L10.6206 11.9861L9.72251 9.22214L12.0736 7.51393L13.3186 6.60942H11.7798H8.87358L7.97553 3.84549Z"
                    fill="#F3D94D"
                    stroke="#EACC29"
                />
            </svg>
            <p>{rating}</p>
        </S.RatingBlockWrap>
    );
}

export default RatingBlock;
