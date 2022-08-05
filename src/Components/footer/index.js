import './footer.css'

const Footer = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/images/imagens/fb.png" alt="" height="100%" width="100%" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/images/imagens/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/images/imagens/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/images/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Developed for Weslley Oliveira.
            </p>
        </section>
    </footer>)
}

export default Footer