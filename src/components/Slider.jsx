import { useEffect, useRef, useState } from 'react';
import cl from './Slider.module.css'

const Slider = (props) => {
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(props.slides.length - 1);
    const timer = useRef(); 

    function setIntervaltoMove(){
        if(props.auto){
            const delay = props.delay || 2500;
            return setInterval(() => setPage(page === totalPage ? 0 : page + 1), delay);
        }
    }
    
    useEffect(()=>{
        if(timer.current){ 
            clearInterval(timer.current); 
        }
        timer.current = setIntervaltoMove();
        return () => {if(props.auto){clearInterval(timer.current)}};
    }, [page])
    
    return (
        <div className={cl.imgDiv}>
            <img 
                onMouseEnter={()=>{
                    if(props.auto && props.stopMouseHover){
                        clearInterval(timer.current);
                    }
                }}
                onMouseLeave={()=>{
                if(props.auto && props.stopMouseHover){
                    timer.current = setIntervaltoMove();
                }
                }} 
                src={props.slides[page].img} 
                alt="Imgage" 
            />
            <h2><span>{props.slides[page].text + " " + (page+1) + "/" + props.slides.length}</span></h2>
            {props.pagination && <div>
                <button
                    onClick={()=>{
                        if(page === 0 && props.loop){
                            setPage(totalPage);
                            return;
                        }
                        else if(page === 0){
                            return;
                        }
                        setPage(page-1);
                    }}
                >←</button>
                {props.slides.map((ellemnt, index)=>
                    <button onClick={()=> setPage(index)} key={index}>{index + 1}</button>
                )}
                <button
                    onClick={()=>{
                        if(page === totalPage && props.loop){
                            setPage(0);
                            return;
                        }
                        else if(page === totalPage){
                            return;
                        }
                        setPage(page+1);
                    }}
                >→</button>
            </div>}
        </div>
    );
}

export default Slider;