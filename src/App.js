import { useEffect } from "react";
import Queries from "./services/queries.service";
import { useSelector } from "react-redux";
import { productsSelector } from "./store/selectors/main";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./store/actions/creators/main";
import { toggleLike } from "./store/actions/creators/main";
import * as S from "./components/StyledMain";
import Card from "./components/card/Card";
import Button from "./components/button/Button";
import { useState } from "react";

function App() {
    const products = useSelector(productsSelector);
    const dispatch = useDispatch();

    const [filterActive, setFilterActive] = useState(false);

    function toggleFilter() {
        setFilterActive(!filterActive);
    }

    useEffect(() => {
        Queries.getProducts().then((prod) => {
            dispatch(fetchProducts(prod.data));
            console.log(prod.data);
        });
    }, []);

    return (
        <div className="App">
            <S.MainWrap>
                <S.MainFilterWrap>
                    <h2>Фильтры</h2>
                    <Button text="Только с лайками" click={toggleFilter} active={filterActive} />
                </S.MainFilterWrap>

                <S.MainCardsWrap>
                    {products
                        ?.filter((el) => (filterActive ? el.like === true : el))
                        .map((el, index) => {
                            return (
                                <Card
                                    key={index}
                                    title={el.title}
                                    description={el.description}
                                    price={el.price}
                                    category={el.category}
                                    rating={el.rating.rate}
                                    img={el.image}
                                    like={el.like}
                                    toggleLike={() => dispatch(toggleLike(el.id))}
                                />
                            );
                        })}
                </S.MainCardsWrap>
            </S.MainWrap>
        </div>
    );
}

export default App;
