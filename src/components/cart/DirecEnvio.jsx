

export const DirecEnvio = () => {


    return (
      
        <div className="pago row g-3">
            <div className="col-sm-6">
                <label id="firstName" htmlFor="firstName" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="firstName" placeholder="juan"  required />
                <div className="invalid-feedback">
                    El nombre valido es requerido
                </div>
                
            </div>

            <div className="col-sm-6">
                <label id="lastName" htmlFor="lastName" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="lastName" placeholder="perez"  required />
                <div className="invalid-feedback">
                    El Apellido es requerido
                </div>
            </div>

            <div className="col-12">
                <label id="username" htmlFor="username" className="form-label">Nombre de usuario</label>
                <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input type="text" className="form-control" id="username" placeholder="Username" required />
                    <div className="invalid-feedback">
                        Opcional
                    </div>
                </div>
            </div>

            <div className="col-12">
                <label id="email" htmlFor="email" className="form-label">Email <span className="text-muted"></span></label>
                <input type="email" className="form-control" id="email" placeholder="correo@example.com" />
                <div className="invalid-feedback">
                    Email
                </div>
            </div>

            <div className="col-12">
                <label id="address2" htmlFor="address2" className="form-label">Direccion<span className="text-muted"></span></label>
                <input type="text" className="form-control" id="address2" placeholder="123 corriente piso2 apto 6b" />
            </div>

            <div className="col-md-5">
                <label id="country" htmlFor="country" className="form-label">Pais</label>
                <select className="form-select" id="country" required>
                    <option value="">Argentina</option>
                    <option>Uruguay</option>
                </select>
                <div className="invalid-feedback">
                    Por favor ingrese su pais
                </div>
            </div>

            <div className="col-md-4">
                <label id="state" htmlFor="state" className="form-label">Provincia</label>
                <select className="form-select" id="state" required>
                    <option value="">Capital Federal</option>
                    <option>Monte Video</option>
                </select>
                <div className="invalid-feedback">
                    Por favor ingrese su provincia
                </div>
            </div>

            <div className="col-md-3">
                <label id="zip" htmlFor="zip" className="form-label">Codigo Postal</label>
                <input type="text" className="form-control" id="zip" placeholder="" required />
                <div className="invalid-feedback">
                    Codigo Postal
                </div>
               
            </div>
        </div>
        
  )


}
