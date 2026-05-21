import { MainData } from '../MainData/MainData'
import style from './Bar.module.css'

function Bar({ schemValid,dataBird,schemaBirthday,res }){
    return(
        <div className={style.Bar}>
            <div className={style.container}>
                <h1 className={style.title}>Sig-up</h1>
                <MainData schemValid={schemValid} dataBird={dataBird} schemaBirthday={schemaBirthday} res={res}/>
            </div>
        </div>
    )
}

export { Bar }