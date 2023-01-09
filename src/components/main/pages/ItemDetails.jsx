
import { useParams } from "react-router-dom";
import { CartBox } from "../../cart/CartBox";
import { useFetch } from "../../../hooks/useFetch";
import { collection } from "firebase/firestore/lite";
import { firebaseDb } from "../../../firebase/config";



export const ItemDetails = () => {

    const productsDb = collection(firebaseDb, 'productos')

    const { id } = useParams();

    const { productsData: item } = useFetch(productsDb, id)


    return (<>

        <h1 className="title mb-2 mt-2">Detalles del producto</h1>
        <div className="container">
            <div className="row justify-content-center">
                <div className="d-flex flex-row m-3 mt-5 border border-warning rounded bg-white">

                    <div className="card-body d-flex w-50 my-5 text-center justify-content-center ">
                        <div>
                            <img className=" img-fluid " src={item.image} alt={item.name} />

                            <p className="text-center fw-bold fs-sm ">Precio: ${item.price}</p>
                        </div>
                    </div>

                    <div className="card-body d-flex w-100 my-5 " >
                        <div className="d-flex flex-column w-100 text-center fs-2 justify-content-center">
                            <div className='card-title'>{item.name}</div>
                            
                            <div>
                                <p className="d-flex text-center fw-light ">{item.detail}</p>
                            </div>
                        </div>
                        <CartBox products={item}></CartBox >
                    </div>
                </div>
            </div>
        </div>






    </>
    )
}


