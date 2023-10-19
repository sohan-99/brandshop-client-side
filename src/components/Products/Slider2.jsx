

const Slider2 = () => {
    return (
        <div>
             <div className="my-3 carousel lg:w-full lg:h-[500px]">
        <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/thSWnnT/photo-1515968004492-e6224002d7db-auto-format-fit-crop-q-60-w-500-ixlib-rb-4-0.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/CBkkhfT/photo-1600692978168-f59e18a1cfbd-auto-format-fit-crop-q-60-w-500-ixlib-rb-4-0.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/X7myXpY/photo-1602492665157-639323eadd31-auto-format-fit-crop-q-60-w-500-ixlib-rb-4-0.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/hWxSM80/photo-1554731617-8eafa9975365-auto-format-fit-crop-q-60-w-500-ixlib-rb-4-0.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide5" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/PY1CN9S/photo-1512054502232-10a0a035d672-auto-format-fit-crop-q-60-w-500-ixlib-rb-4-0.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide6" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/cxmJ9VT/images-q-tbn-ANd9-Gc-T4ve3bfc-Dh-U4d-Hgcbjf2-PLp-UJu-Tp-Es-Ef65-A-usqp-CAU.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide5" className="btn btn-circle">❮</a>
                <a href="#slide7" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide7" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/YWxr3Nh/images-q-tbn-ANd9-Gc-Qp-C92mj-i-Gcj-n-TYe-KGE9-KD8-HTb-Sbx-Kh-Qb-A-usqp-CAU.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide6" className="btn btn-circle">❮</a>
                <a href="#slide8" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide8" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/tZrtgQZ/images-q-tbn-ANd9-Gc-Qxy-Lkszp-Bb-Ip-Jr-BTLeu-RMYkd-7t8-Yrn-Fp-V6g-usqp-CAU.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide7" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Slider2;