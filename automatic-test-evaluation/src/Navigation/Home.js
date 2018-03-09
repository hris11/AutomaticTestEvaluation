import React, {Component} from 'react';
import {Paper} from "material-ui";
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className="paper-wrapper">
                <Paper zDepth={2}>
                    <div className="paper-body">
                        <p className="p-text">
                            В днешния развиващ се свят, с всеки изминал миг, бумът на технологиите променя всяка сфера на обществото. С години в образованието и училищата рядко биват интегрирани нови научни открития или постижения. Средностатистическите училища нямат възможност да поддържат технологична база, която да ограмотява учениците. Много нови открития са в сферата на автоматизацията, но малка част от тях биват интегрирана в училищата. Слабата интеграция е в резултат на това, че те нямат паричната възможност за това или пък въобще нямат нужната техническа грамотност, за да го направят. В свят, където учителят има много важна роля в изграждане на бъдещето общество, както морално, така и научно, той трябва да е запознат с най-новите тенденции, както и да се опитва да ги налага, ако те са по-добри и водят до положителни промени.
                        </p><br/>
                        <p>
                            Проверяването на бланки е трудоемка задача, недотолкова сложна, колкото отегчаващa и натоварваща. Всеки учител или преподавател се е сблъсквал с това, да проверява огромен брой контролни и знае, че е натоварващо и отнема ненужно много време.
                        </p><br/>
                        <p>
                            Това ме провокира да създам просто и удобно приложение, което спестява много време, лесно е за употреба и не изисква професионални технически познания.
                        </p>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default Home;