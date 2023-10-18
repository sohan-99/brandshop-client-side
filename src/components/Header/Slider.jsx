

const Slider = () => {
    return (
        <div>
             <div className="my-3 carousel lg:w-full lg:h-[500px]">
        <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/PMBDnyv/photo-1543965860-82ed7d542cc4-auto-format-fit-crop-q-80-w-1460-ixlib-rb-4-0.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/JxcCRpj/photo-1610945264803-c22b62d2a7b3-auto-format-fit-crop-q-60-w-500-ixlib-rb-4-0.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/ScFZVVr/photo-1592286927505-1def25115558-auto-format-fit-crop-q-60-w-500-ixlib-rb-4-0.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/XZsRnbC/photo-1512428559087-560fa5ceab42-auto-format-fit-crop-q-80-w-1470-ixlib-rb-4-0.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide5" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/N1V9gLJ/photo-1587840181242-bf05eb933bbc-auto-format-fit-crop-q-60-w-500-ixlib-rb-4-0.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide6" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/VjT5wTm/photo-1655356392708-c675781f1748-auto-format-fit-crop-q-80-w-1374-ixlib-rb-4-0.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide5" className="btn btn-circle">❮</a>
                <a href="#slide7" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide7" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/FYPpV60/new-budget-phone-or-old-flagship-resized-2.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide6" className="btn btn-circle">❮</a>
                <a href="#slide8" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide8" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/h9sJSgM/Vivo.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide7" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Slider;