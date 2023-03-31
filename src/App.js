import { useEffect } from "react";
import Queries from "./services/queries.service";
import { useSelector } from "react-redux";
import { productsSelector } from "./store/selectors/main";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./store/actions/creators/main";
import { MainCardsWrap, MainWrap } from "./components/StyledMain";
import Card from "./components/card/Card";

function App() {
    const products = useSelector(productsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        Queries.getProducts().then((prod) => {
            dispatch(fetchProducts(prod.data));
            console.log(prod.data);
        });
    }, []);

    return (
        <div className="App">
            <MainWrap>
                <MainCardsWrap>
                    {products?.map((el, index) => {
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
                            />
                        );
                    })}
                </MainCardsWrap>
            </MainWrap>
        </div>
    );
}

export default App;
