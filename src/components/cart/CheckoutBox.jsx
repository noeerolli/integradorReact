import { LoginContext } from "../login/LoginContext";
import { Login } from "../login/Login";
import { useContext, useState } from "react";
import { Alert, Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { CartContext } from "./CartContext";




export const CheckoutBox = () => {

    const { isLogged } = useContext(LoginContext);
    const { products, cartCounter, total } = useContext(CartContext);
    const [validated, setValidated] = useState(false);



    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        
        } else {

            alert("Pagado")
        }
       
        setValidated(true);
            

    } 


    return isLogged
        ?
        <div className="container bg-white mt-5 border border-warning rounded">
            <div className="container " >
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
                                <span className="badge bg-primary rounded-pill">{cartCounter}</span>
                            </h4>

                            {products.map(({ id, name, price }) =>
                                <ul className="list-group mb-3">
                                    <li className="list-group-item d-flex justify-content-between lh-sm">
                                        <div>
                                            <h6 className="my-0">{name}</h6>

                                        </div>
                                        <span className="text-muted">${price}</span>
                                    </li>
                                </ul>
                            )}

                            <ul>
                                <li className="list-group-item d-flex justify-content-between bg-light">
                                    <div className="text-success">
                                        <h6 className="my-0">Codigo de Promoción</h6>
                                        <small>QhRtBDL</small>
                                    </div>
                                    <span className="text-success">−$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total (USD)</span>
                                    <strong> ${total}</strong>
                                </li>
                            </ul>

                            <form className="card p-2">
                                <div className="input-group">
                                    <input name="promo" type="text" className="form-control" placeholder="Promo code" />
                                    <button className="btn btn-secondary" onClick={(e)=>(e.preventDefault())}>Aplicar</button>     
                                </div>
                            </form>
                        </div>

                        <div className="col-md-7 col-lg-8">

                            <h4 className="mb-3">Dirección de envio</h4>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">

                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="First name"

                                        />
                                        <Form.Control.Feedback>accepted</Form.Control.Feedback>
                                    </Form.Group>


                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Last name"

                                        />
                                        <Form.Control.Feedback>accepted</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                        <Form.Label>Username</Form.Label>
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                placeholder="Username"
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Proporcione nombre de usuario
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="tu@mail.com"

                                        />
                                        <Form.Control.Feedback>accepted</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="12" controlId="validationCustom04">
                                        <Form.Label>Dirección</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Av. Cordoba 457 "

                                        />
                                        <Form.Control.Feedback>accepted</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" controlId="validationCustom05">
                                        <Form.Label>Ciudad</Form.Label>
                                        <Form.Control type="text" placeholder="Ciudad" required />
                                        <Form.Control.Feedback type="invalid">
                                            Proporcione una ciudad valida
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustom06">
                                        <Form.Label>Provincia</Form.Label>
                                        <Form.Control type="text" placeholder="Provincia" required />
                                        <Form.Control.Feedback type="invalid">
                                            Proporcione una provincia valida
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustom07">
                                        <Form.Label>Codigo Postal</Form.Label>
                                        <Form.Control type="text" placeholder="Codigo Postal" required />
                                        <Form.Control.Feedback type="invalid">
                                            Proporcione un Codigo postal Valido
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <hr className="my-4" />
                                    <Form.Group className="mb-3">
                                        <Form.Check
                                            required
                                            label="La dirección de envío es la misma que mi dirección de facturación"
                                            feedbackType="invalid"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Check
                                            required
                                            label="Guardar esta información para la próxima vez"
                                            feedbackType="invalid"
                                        />
                                    </Form.Group>
                                    <hr className="my-4" />


                                    <h4 className="mb-3">Pago</h4>

                                    <Form.Group className="mb-1">
                                        <Form.Check
                                            type="radio"
                                            label="Tarjeta de Debito"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                            
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-1">
                                        <Form.Check
                                            type="radio"
                                            label="Tarjeta de Credito"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                          
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-1">
                                        <Form.Check
                                            type="radio"
                                            label="Paypal"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                       
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" controlId="validationCustom06">
                                        <Form.Label>Nombre Tarjeta</Form.Label>
                                        <Form.Control type="text" placeholder="Carlos" required />
                                        <Form.Control.Feedback type="invalid">
                                            Nombre que figura en la tarjeta
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" controlId="validationCustom06">
                                        <Form.Label>Numero de Tarjeta</Form.Label>
                                        <Form.Control type="text" maxlength="16" pattern="([0-9]{16})" placeholder="1234 5678 9876 1368" required />
                                        <Form.Control.Feedback type="invalid">
                                            numero que figura en la tarjeta
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="validationCustom06">
                                        <Form.Label>Vencimiento</Form.Label>
                                        <Form.Control type="month" placeholder="03/23" required />
                                        <Form.Control.Feedback type="invalid">
                                            Fecha venciomiento de la tarjeta
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" className="mb-3" controlId="validationCustom06">
                                        <Form.Label>CVV</Form.Label>
                                        <Form.Control type="text" maxlength="3" pattern="([0-9]{3})" placeholder="526" required />
                                        <Form.Control.Feedback type="invalid">
                                            ultimos 3 numeros al reverso de la tarjeta
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                               
                                <Button type="submit">Pagar</Button>
                                
                            </Form>

                        </div>
                    </div>
                </main>

                <footer className="my-4 pt-5 text-muted text-center text-small">
                    <p className="mb-1">&copy; 2022–2023 Company Warsies</p>

                </footer>
            </div>
        </div>
        : <Login />


}