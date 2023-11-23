import React from 'react';
import './produksiya.css'
import img1 from './endeavor-large 1.png'
import img2 from './img6 1.png'
import img3 from './gallery_cs300_1 1.png'
import img4 from './754-1 1.png'
import img5 from './img5 1.png'
import img6 from './pacemaker-advisa-mrishtsh222 1.png'

function Produksiya(props) {
    return (
        <div className='produksiya'>
            <div className="container">
                <h1 className='pro_text'>ПРОДУКЦИЯ</h1>
                <div className="product_box">
                    <div className="product">
                        <div className="pr_img">
                            <img width="220px" src={img1} alt="img" />
                        </div>
                        <p>Эндоваскулярная хирургия</p>
                        <button className='btn1'>Посмотреть все</button>
                    </div>
                    <div className="product">
                        <div className="pr_img">
                            <img width="200px" src={img2} alt="img" />
                        </div>
                        <p>Лабораторная диагностика</p>
                        <button className='btn1'>Посмотреть все</button>
                    </div>
                    <div className="product">
                        <div className="pr_img">
                            <img width="235px" src={img3} alt="img" />
                        </div>
                        <p>Кардиохирургия</p>
                        <button className='btn1'>Посмотреть все</button>
                    </div>
                    <div className="product">
                        <div className="pr_img">
                            <img width="100%" src={img4} alt="img" />
                        </div>
                        <p>ДИАБЕТ</p>
                        <button className='btn1'>Посмотреть все</button>
                    </div>
                    <div className="product">
                        <div className="pr_img">
                            <img width="154px" src={img5} alt="img" />
                        </div>
                        <p>ЭНДОУРОЛОГИЯ</p>
                        <button className='btn1'>Посмотреть все</button>
                    </div>
                    <div className="product">
                        <div className="pr_img">
                            <img width="154px" src={img6} alt="img" />
                        </div>
                        <p>АРИТМОЛОГИЯ</p>
                        <button className='btn1'>Посмотреть все</button>
                    </div>
                </div>
                <div className="pro_text2">
                    <p>Перейти в каталог нашей продукции</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <g clip-path="url(#clip0_0_64)">
                            <path d="M30 15C30 6.7285 23.2715 -2.94112e-07 15 -6.55671e-07C6.7285 -1.01723e-06 -2.94112e-07 6.72849 -6.55671e-07 15C-1.01723e-06 23.2715 6.72967 30 15 30C23.2703 30 30 23.2715 30 15ZM2.32377 15C2.32377 8.01123 8.01006 2.32377 15 2.32377C21.9899 2.32377 27.6762 8.01123 27.6762 15C27.6762 21.9899 21.9899 27.6762 15 27.6762C8.01006 27.6762 2.32377 21.9888 2.32377 15Z" fill="#0D4C93" />
                            <path d="M13.3966 21.6344L19.2061 15.8249C19.6569 15.3718 19.6569 14.6398 19.2061 14.1866L13.3966 8.37719C12.9621 8.00424 12.3195 8.00424 11.885 8.37719C11.3981 8.79431 11.3413 9.52861 11.7584 10.0155L16.7428 15L11.7583 19.9961C11.3075 20.4493 11.3075 21.1812 11.7583 21.6344C12.2115 22.0852 12.9435 22.0852 13.3966 21.6344Z" fill="#0D4C93" />
                        </g>
                        <defs>
                            <clipPath id="clip0_0_64">
                                <rect width="30" height="30" fill="white" transform="translate(30) rotate(90)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Produksiya;