import { useState } from "react";
import style from './DataYear.module.css'

function DataYear ({ res,dataBird,values,errors,touched,setFieldValue,setFieldTouched}){
    let [days,setDays] = useState([])
    
    let data = (month) => {
        let count = dataBird.find(el => el.month == month).days
        let result = []
        for(let i = 1;i <= count;i++){
            result.push(i)
        }
        setDays(result)
        setFieldValue('month', month);
        setFieldValue('day', '');
    }
    
    return(
        <div className={style.data}>
            <div className={`${style.one} ${style.content}`}>
                <select className={touched.month && errors.month  ? style.eror : ''} value={values.month} onChange={(e) => data(e.target.value)} onBlur={() => setFieldTouched('month',true)}>
                    <option value="">Month</option>
                    {dataBird.map(el => <option key={el.month}>{el.month}</option>)}
                </select>
                {touched.month && errors.month && <p>{errors.month}</p>}
            </div>
    
            <div className={`${style.two} ${style.content}`}>
                <select className={touched.day && errors.day ? style.eror : ''} value={values.day} onChange={(e) => setFieldValue('day',e.target.value)} onBlur={() => setFieldTouched('day',true)}>
                    <option value="">Day</option>
                    {days.map(el => <option key={el}>{el}</option>)}
                 </select>
                {touched.day && errors.day && <p>{errors.day}</p>}
            </div>
            <div className={`${style.three} ${style.content}`}>
                <select className={touched.year && errors.year ? style.eror  : ''} value={values.year} onChange={(e) => setFieldValue('year',e.target.value)} onBlur={() => setFieldTouched('year',true)}>
                    <option value="">Year</option>
                    {res.map(el => <option key={el}>{el}</option>)}
                </select>
                {touched.year && errors.year && <p>{errors.year}</p>}
            </div>
        </div>
    )
}

export { DataYear }