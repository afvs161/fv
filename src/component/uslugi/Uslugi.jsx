import React from 'react';
import './uslugi.css'
import img1 from './servic 1.png'
import img2 from './IIM-CAT-2020-application-deadline-extended-here’s-all-you-need-to-know 1.png'
import img3 from './man-by-truck-guy-delivery-uniform-man-with-clipboard 1.png'

function Uslugi(props) {
    return (
        <div className='uslugi'>
            <h1 className='usl_text'>УСЛУГИ</h1>
            <div className="post_box p-5">
                <div className="post">
                    <img className='pt_img' src={img1} alt="img" />
                    <h3>СЕРВИС ОБОРУДОВАНИЯ</h3>
                    <p>Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......</p>
                    <button className='btn2'>Подробнее</button>
                </div>
                <div className="post">
                    <img className='pt_img' src={img2} alt="img" />
                    <h3>СЕРВИС ОБОРУДОВАНИЯ</h3>
                    <p>Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......</p>
                    <button className='btn2'>Подробнее</button>
                </div>
                <div className="post">
                    <img className='pt_img' src={img3} alt="img" />
                    <h3>СЕРВИС ОБОРУДОВАНИЯ</h3>
                    <p>Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......</p>
                    <button className='btn2'>Подробнее</button>
                </div>
            </div>
        </div>
    );
}

export default Uslugi;