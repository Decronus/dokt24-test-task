import * as S from "./styles";
import DeleteIcon from "../delete-icon/DeleteIcon";
import RatingBlock from "../rating-block/RatingBlock";

function Card() {
    return (
        <S.CardWrap>
            <S.CardImg>
                <S.CardBage>Игровые консоли</S.CardBage>
                <DeleteIcon />
            </S.CardImg>

            <S.CardInfo>
                <div>
                    <h3 style={{ marginBottom: "8px" }}>Xbox Series S</h3>
                    <p>
                        Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches)
                        in the padded sleeve, your everyday
                    </p>
                </div>
                <S.CardPriceBlock>
                    <h3>109.95 ₽</h3>

                    <S.CardRatingAndLike>
                        <RatingBlock />
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.10534 13.1123L7.10462 13.1117C5.05602 11.254 3.39619 9.74785 2.24249 8.33735C1.09454 6.93386 0.5 5.68617 0.5 4.35417C0.5 2.19198 2.19198 0.5 4.35417 0.5C5.58027 0.5 6.76487 1.07322 7.53599 1.97875L7.91667 2.42579L8.29734 1.97875C9.06846 1.07322 10.2531 0.5 11.4792 0.5C13.6414 0.5 15.3333 2.19198 15.3333 4.35417C15.3333 5.68618 14.7388 6.93389 13.5907 8.33846C12.4377 9.74908 10.7794 11.2561 8.73266 13.116L8.72939 13.119L8.72832 13.12L7.91794 13.8521L7.10534 13.1123Z"
                                stroke="#B5B5B5"
                            />
                        </svg>
                    </S.CardRatingAndLike>
                </S.CardPriceBlock>
            </S.CardInfo>
        </S.CardWrap>
    );
}

export default Card;
