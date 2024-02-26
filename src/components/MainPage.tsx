import style from '../components/MainPage.module.css'
import SliderAbility from "./SliderAbility";
import Services from "./Services";
import Goals from "./Goals";





const MainPage = () => {
    return (
        <div>
            <div>
                <h1 className='p-8 text-[44px] leading-[46px] m-auto mt-[52px]'>Оказываем <br/> <span className={style.span}>спектр услуг </span>
                    в<br/> сфере<br/> сопровождения<br/> деятельности<br/> <span className={style.span}> it-компаний</span> </h1>
            </div>
            <SliderAbility/>
            <Services/>
            <Goals/>

        </div>

    );
};

export default MainPage;