import React from 'react';
import './company.css'
import logo from './logo 1.png'

function Company(props) {
    return (
        <div className='company'>
            <div className="container">
                <h1 className='usl_text'>О КОМПАНИИ</h1>
                <div className="cy_box">
                    <div className="box1">
                        <div className="lg_border1">
                            <div className="lg_border2">
                                <div className="lg_border3">
                                    <img className='lg_logo' src={logo} alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box2">
                        <p>Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online Services". Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения передовых технологий в систему здравоохранения Республики Узбекистан. </p>
                        <button className='btn2'>Узнать больше</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Company;