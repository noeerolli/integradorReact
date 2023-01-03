


export const Pago = () => {


    return (

        <div>
            <div className="my-3 ">
                <div className="form-check">
                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" required />
                    <label className="form-check-label" htmlFor="credit">Tarjeta de Credito</label>
                </div>
                <div className="form-check">
                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                    <label className="form-check-label" htmlFor="debit">Tarjeta de debito</label>
                </div>
                <div className="form-check">
                    <input id="mercadoPago" name="paymentMethod" type="radio" className="form-check-input" required />
                    <label className="form-check-label" htmlFor="mercadoPago">Mercado pago</label>
                </div>
            </div>

            <div className="row gy-3">
                <div className="col-md-6">
                    <label htmlFor="cc-name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="cc-name" placeholder="" required />
                    <small className="text-muted">Nombre con figura en su tarjeta</small>
                    <div className="invalid-feedback">
                        El nombre es requerido
                    </div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="cc-number" className="form-label">Numero de su tarjeta</label>
                    <input type="text" className="form-control" id="cc-number" placeholder="" required />
                    <div className="invalid-feedback">
                        EL numero de la tarjeta es requerido
                    </div>
                </div>

                <div className="col-md-3">
                    <label htmlFor="cc-expiration" className="form-label">Fecha Expiracion</label>
                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                    <div className="invalid-feedback">
                        fecha de Expiracion requerida
                    </div>
                </div>

                <div className="col-md-3">
                    <label htmlFor="cc-cvv" className="form-label">CVV</label>
                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                    <div className="invalid-feedback">
                        Codigo de seguridad
                    </div>
                </div>
            </div>
        </div>
    )
}
