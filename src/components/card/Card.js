import * as S from "./styles";
import DeleteIcon from "../delete-icon/DeleteIcon";
import RatingBlock from "../rating-block/RatingBlock";

function Card({ category, title, price, description, rating, img, like, toggleLike, deleteProduct }) {
    function categoryColor() {
        switch (category) {
            case "men's clothing":
                return "#5161EB";
            case "jewelery":
                return "#8BC0BD";
            case "electronics":
                return "#9CA0C3";
            case "women's clothing":
                return "#C487C9";
            default:
                return "cccccc";
        }
    }

    return (
        <S.CardWrap>
            <div>
                <S.CardImg img={img}>
                    <S.CardBage color={categoryColor()}>{category}</S.CardBage>
                    <DeleteIcon deleteProduct={deleteProduct} />
                </S.CardImg>
            </div>

            <S.CardInfo>
                <div>
                    <h3 style={{ marginBottom: "8px" }}>{title}</h3>
                    <p>{description}</p>
                </div>
                <S.CardPriceBlock>
                    <h3>{price + " €"}</h3>

                    <S.CardRatingAndLike like={like}>
                        <RatingBlock rating={rating} />
                        <svg
                            onClick={toggleLike}
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
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
