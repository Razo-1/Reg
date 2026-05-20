import { MainData } from '../MainData/MainData'
import style from './Bar.module.css'

function Bar({ schemValid }){
    return(
        <div className={style.Bar}>
            <div className={style.container}>
                <h1 className={style.title}>Sig-up</h1>
                <MainData schemValid={schemValid}/>
            </div>
        </div>
    )
}

export { Bar }