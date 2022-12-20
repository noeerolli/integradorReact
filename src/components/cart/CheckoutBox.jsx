import { LoginContext } from "../login/LoginContext";
import { Login } from "../login/Login";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useContext, useState } from "react";




export const CheckoutBox = () =>{

    const {isLogged} = useContext(LoginContext);
   const [formEnv, setformEnv] = useState(false)
  

return isLogged
    ?
   
        <div className="d-block bg-white w-50 h-100 align-content-center justify-content-center m-auto border border-warning rounded">
            <div className="text-center ">

                <img className=" img-thumbnail " src="https://img.freepik.com/foto-gratis/anverso-reverso-tarjeta-credito-azul-aislado_125540-651.jpg?auto=format&h=200" alt="" />

            </div>

            <div className="mt-4">

                <Formik
                    initialValues={{
                        numberT: '',
                        codigoSeg: '',
                        nombre:''
                        

                    }}
                    validate={(valores) => {
                        let errores = {};
                        //validacion del numero de tarjeta
                        if (valores.numberT.length <= 1) {
                            errores.numberT = 'Debe ingresar un numero de tarjeta'
                        } else if (valores.numberT.length < 10 || valores.numberT.length >= 11) {
                            errores.numberT = 'numero de tarjeta invalido'

                        }

                        //validacion del codigo de seguridad

                        if (valores.codigoSeg.length <= 1) {
                            errores.codigoSeg = 'Ingrese codigo de seguridad'

                        } else if (valores.codigoSeg.length < 3 || valores.codigoSeg.length >= 4) {
                            errores.codigoSeg = 'El codigo de seguridad es incotrrecto'

                        }

                        return errores;

                    }}
                    onSubmit={(valores, { resetForm }) => {
                        resetForm();
                        setformEnv(true);
                        setTimeout(() => setformEnv(false), 5000)
                    }}
                >

                    {({ errors }) => (
                        <Form>

                            <div className="mb-3 ms-3 me-2">
                                <label
                                    className="form-label">Numero de tarjeta
                                </label>
                                <Field
                                    name="numberT"
                                    type="tel"
                                    className="form-control"
                                    placeholder="1234 5678 91 "
                                />
                                <ErrorMessage name="numberT" component={() => (
                                    <div className="text-danger fw-bold">{errors.numberT}</div>
                                )} />


                            </div>
                            <div className="mb-3 ms-3 me-2">
                                <label for="" className="form-label">Nombre</label>
                                <Field type="text" name="nombre" className="form-control" placeholder="Mariel Gonzalez" />
                                <div className="form-text">Tal cual como figura en tu tarjeta</div>
                            </div>
                            <div className="mb-3 ms-3 me-2">
                                <label for="" className="form-label">Fecha de vencimiento</label>
                                <input type="month" className="form-control"/>

                            </div>
                            <div className="mb-3 ms-3 me-2">
                                <label for="" className="form-label">codigo de seguridad</label>
                                <Field
                                    name="codigoSeg"
                                    type="password"
                                    className="form-control"
                                    placeholder="000"

                                />

                                <ErrorMessage name="codigoSeg" component={() => (
                                    <div className="text-danger fw-bold">{errors.codigoSeg}</div>
                                )} />

                            </div>
                            <div className="mb-3 ms-3 me-2">
                                <Field name="tarjeta" as="select" className="form-select form-select-sm mb-3 bg-warning" aria-label=".form-select-sm" >
                                    <option selected>Tarjeta</option>
                                    <option value="1">MasterCard</option>
                                    <option value="2">Visa</option>
                                    <option value="3">AmericanExpress</option>
                                </Field>
                               
                            </div>
                            <button className="btn btn-primary ms-3">Pagar</button>
                            {formEnv && <p className="text-center text-success fw-bold"> Su pago fue relizado con exito </p>}
                        </Form>
                    )}

                </Formik>
            </div>

        </div>

    : <Login/>
  

}