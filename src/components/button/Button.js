import * as S from "./styles";

function Button({ text, click, active }) {
    return (
        <S.ButtonWrap onClick={click} active={active}>
            {text}
        </S.ButtonWrap>
    );
}

export default Button;
