import { LoginContext } from "../login/LoginContext";
import { Login } from "../login/Login";
import { useContext } from "react";
import { DirecEnvio } from "./DirecEnvio";
import { Pago } from "./Pago";
import { Link } from "react-router-dom";


export const CheckoutBox = () => {

    const { isLogged } = useContext(LoginContext);


    (function () {
        'strict'

        let forms = document.querySelectorAll('.needs-validation')

        Array.prototype.slice.call(forms)
            .forEach(
                function (form) {
                    form.addEventListener('submit', function (event) {
                        if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                            event.defaultChecked()
                            
                        }

                        form.classList.add('was-validated')
                    }, false)
                })
    })()

    return isLogged
        ?

        <div className="container bg-white mt-5 border border-warning rounded">
            <div className="container ">
                <main>
                    <div className="py-5 text-center">
                        <img className="d-block mx-auto mb-4 img-thumbnail" src="https://img.freepik.com/foto-gratis/anverso-reverso-tarjeta-credito-azul-aislado_125540-651.jpg?auto=format&h=200" alt="" />
                        <h2>Pagos</h2>
                        <p className="lead">Ingrese los datos solicitados tal cual como figuran en su tarjeta</p>
                    </div>

                    <div className="row g-5">
                        <div className="col-md-5 col-lg-4 order-md-last">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-primary">Tus Productos</span>
                                <span className="badge bg-primary rounded-pill">3</span>
                            </h4>
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Nombre del Producto</h6>
                                        <small className="text-muted">Breve Descripción</small>
                                    </div>
                                    <span className="text-muted">$12</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Segundo producto</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">$8</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Tercer Articulo</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between bg-light">
                                    <div className="text-success">
                                        <h6 className="my-0">Codigo de Promoción</h6>
                                        <small>QhRtBDL</small>
                                    </div>
                                    <span className="text-success">−$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total (USD)</span>
                                    <strong>$20</strong>
                                </li>
                            </ul>

                            <form className="card p-2">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Promo code" />
                                    <button type="submit" className="btn btn-secondary">Aplicar</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-7 col-lg-8">
                            <h4 className="mb-3">Dirección de envio</h4>
                            <form className="needs-validation" noValidate>

                                <DirecEnvio onChange={event => event.target.value.defaultChecked} />

                                <hr className="my-4" />

                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="same-address" />
                                    <label className="form-check-label" id="same-address" htmlFor="same-address">La direccion de envio es la misma que mi direccion de facturacion</label>
                                </div>

                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="save-info" />
                                    <label className="form-check-label" id="save-info" htmlFor="save-info">Guardar la informacion para la proxima vez</label>
                                </div>

                                <hr className="my-4" />

                                <h4 className="mb-3">Pago</h4>

                                <Pago onChange={event => event.target.value} />

                                <hr />

                                <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                            </form>
                        </div>
                    </div>
                </main>

                <footer className="my-5 pt-5 text-muted text-center text-small">
                    <p className="mb-1">&copy; 2017–2021 Company Name</p>
                    <ul className="list-inline">
                        <li className="list-inline-item"><Link to="#">Privacy</Link ></li>
                        <li className="list-inline-item"><Link to="#">Terms</Link ></li >
                        <li className="list-inline-item"><Link to="#">Support</Link ></li >
                    </ul>
                </footer>
            </div>
        </div>
        : <Login />


}