import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div class="row">
            <div class="footer-col-3">
               <h3 id="h3-aparte">Contacto</h3>
               <ul>
                   <li>info@lafrancesa.com<br/>
                       Whatsapp: +99 101-7246
                   </li>
                   <li>Avenida Siempreviva 123</li>
                   <li>Barranquilla, Colombia</li>
               </ul>
            </div>
            <div class="footer-col-4">
                <h3 id="h3-aparte">Síguenos en redes</h3>
                <ul>
                    <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
                    <li><a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest</a></li>
                </ul>
            </div>
        </div>
        <hr class="horizontal-line"/>
        <p class="copyright">© 2023 - <a href="https://github.com/alencett" target="_blank" rel="noreferrer">Alvaro Blanquicett</a></p>
    </div>
    )
}

export default Footer