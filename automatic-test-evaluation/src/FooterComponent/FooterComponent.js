import React, {Component} from 'react'
import './FooterComponent.css'

class FooterComponent extends Component {
    render() {
        return (
            <div id="container">
            {/*<div className="footer-component-box">
                <div>
                    <div className="links">
                        <a href="https://github.com/hris11/AutomaticTestEvaluation">Repository</a>
                    </div>
                    <div className="links">
                        <a href="https://github.com/hris11/AutomaticTestEvaluation">Documentation</a>
                    </div>
                </div>
                <div className="copyright-and-slogan">
                    <span>Полуавтоматично проверяване на тестове със затворен отговор</span>
                </div>
            </div>*/}

                <footer className="footer-distributed">

                    <div className="footer-right">
                        <a href="https://www.facebook.com/hristian.genchev">Facebook</a>
                        <a href="https://github.com/hris11">Github</a>
                        <a href="https://www.linkedin.com/in/hristian-genchev-a77048153/">LinkedIn</a>

                    </div>

                    <div className="footer-left">

                        <p className="footer-links">
                            <a href="https://github.com/hris11/AutomaticTestEvaluation">Хранилище</a>
                            ·
                            <a href="https://drive.google.com/open?id=17gYOPXAMHpW6dtfh98ACDjW1XqDAk4P00AlXQR6QSaQ">Документация</a>
                            ·
                            <a href="http://www.elsys-bg.org/">Училище</a>
                            ·
                            <a href="https://drive.google.com/open?id=17gYOPXAMHpW6dtfh98ACDjW1XqDAk4P00AlXQR6QSaQ">Упътване</a>
                            ·
                            <a href="https://plus.google.com/u/0/105596482464279590059">Контакти</a>
                        </p>

                        <p>Полуавтоматично проверяване на тестове със затворен отговор &copy; 2018 | Християн Генчев | GNU General Public License v2.0</p>
                    </div>

                </footer>
            </div>
        );
    }
}

export default FooterComponent;