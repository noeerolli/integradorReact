import { FaFacebook, FaInstagram, FaPhone, FaRegEnvelope, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom"
import "../footer/footer.css"

export const Footer = () => {

   return (
    <footer className="text-black py-4 bg-light mb-0">
        <div className="container">
            <div>
                <ul className="list-unstyled ">
                    <li className="footer-icons">
                        <FaFacebook className="m-2 fs-4"/>
                        <FaInstagram className="m-2 fs-4"/>
                        <FaTwitter className="m-2 fs-4"/>
                    </li>
                </ul>
            </div>
            <nav className="row">
                <ul className="col-12 col-md-4 list-unstyled">
                    <li className="fw-bold mb-2 text-center"><FaWhatsapp/> 221 2343354</li>
                    <li className="fw-bold mb-2 text-center"><FaPhone/> 221 4544632</li>
                    <li className="fw-bold text-center"><FaRegEnvelope/> eshopwarsies@gmail.com</li>
                </ul>
                <ul className="col-12 col-md-4 list-unstyled">
                    <li className="text-center"><Link to="/collectibles" className="text-reset">Coleccionables</Link></li>
                    <li className="text-center"><Link to="/clothing" className="text-reset">Indumentaria</Link></li>
                    <li className="text-center"><Link to="/contact" className="text-reset">Contacto</Link></li>
                </ul>
                <div className=" container col-12 col-md-4 list-unstyled d-flex flex-wrap text-center">
                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" class="icon-logo lazyloaded" alt="visa" width="50" height="35"/>
                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" class="icon-logo lazyloaded" alt="mastercard" width="50" height="35"/>
                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png" class="icon-logo lazyloaded" alt="amex" width="50" height="35"/>
                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png" class="icon-logo lazyloaded" alt="diners" width="50" height="35"/>
                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/banelco@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/banelco@2x.png" class="icon-logo lazyloaded" alt="ar_banelco" width="50" height="35"/>
                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png" class="icon-logo lazyloaded" alt="ar_cabal" width="50" height="35"/>
                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png" class="icon-logo lazyloaded" alt="ar_tarjeta-naranja" width="50" height="35"/>
                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-shopping@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-shopping@2x.png" class="icon-logo lazyloaded" alt="ar_tarjeta-shopping" width="50" height="35"/>
                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png" class="icon-logo lazyloaded" alt="mercadopago" width="50" height="35"/>
                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/rapipago@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/rapipago@2x.png" class="icon-logo lazyloaded" alt="rapipago" width="50" height="35"/>
                </div>
                <p className="text-center">©Copyright Warsies Shop - 2023</p>
            </nav>
        </div>
    </footer>
        
    )
    

}