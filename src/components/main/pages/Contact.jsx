import { Formik,Form, Field, ErrorMessage } from "formik"
import { useState } from "react"




export const Contact = () => {

    const [formEnv, setformEnv] = useState(false);

    return (

        <div className=" d-block bg-white w-50 h-75 align-content-center justify-content-center m-auto border-warning rounded ">

            <h1 className="title text-dark mt-5 ">Contacto</h1>

            <Formik
                initialValues={{
                    nombre: '',
                    correo: '',
                    comentario: ''
                }}

                validate={(valores) => {
                    let errores = {}
                    //Validacion del campo nombre
                    if (!valores.nombre) {
                        errores.nombre = 'Debe ingresar nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                        errores.nombre = 'El nombre solo puede contener letras y espacios'
                    }

                    if (!valores.correo) {
                        errores.correo = 'Ingrese un correo'
                    } else if (! /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(valores.correo)) {
                        errores.correo = 'El correo solo puede contener letras, puntos, guiones'
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
                            <label className="form-label fs-5 fw-bold">Nombre</label>

                            <Field
                                name='nombre'
                                type='text'
                                className='form-control'
                                placeholder='Ingrese su nombre'
                            />
                            <ErrorMessage name='nombre' component={() => (
                                <div className="text-danger fw-bold">{errors.nombre}</div>
                            )} />
                        </div>

                        <div className=" mb-3 ms-3 me-2">
                            <label className="form-label fs-5 fw-bold">Correo</label>

                            <Field type='text'
                                name='correo'
                                className='form-control'
                                placeholder='miCorreo@correo.com' />
                            <ErrorMessage name='correo' component={() => (
                                <div className="text-danger fw-bold">{errors.correo}</div>
                            )} />
                        </div>

                        <div className=" mb-3 ms-3 me-2">
                            <label className="form-label fs-5 fw-bold">Comentario</label>
                            <Field
                                className='form-control' rows="5" minLength="1" maxLength="240 "
                                name='comentario'
                                as='textarea'
                                placeholder='Mensaje'
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mb-4 ms-3 ">Enviar</button>
                        {formEnv && <p className="text-center text-success fw-bold">Enviado</p>}
                    </Form>
                )}

            </Formik>
        </div>
    )
}