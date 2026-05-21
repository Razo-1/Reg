import { useState } from "react";
import { useFormik } from "formik";
import style from './DataYear.module.css'

function DataYear ({ dataBird,schemaBirthday,res}){
    let [days,setDays] = useState([])

    const formik = useFormik({
        initialValues : {
            month : '',
            day : '',
            year : ''
        },
        validationSchema:schemaBirthday,
        onSubmit: (values) => { console.log(values)}
    })
    
    let data = (month = 'january') => {
        let count = dataBird.find(el => el.month == month).days
        let result = []
        for(let i = 1;i <= count;i++){
            result.push(i)
        }
        formik.setFieldValue('month', month);
        formik.setFieldValue('day', '');
        return setDays(result)
    }
    
    
    
    return(
        <form className={style.data} onSubmit={formik.handleSubmit}>
            <div className={`${style.one} ${style.content}`}>
                <select className={formik.touched.month && formik.errors.month  ? style.eror : ''} value={formik.values.month} onChange={(e) => data(e.target.value)} onBlur={() => formik.setFieldTouched('month',true)}>
                    <option value="">Month</option>
                    {dataBird.map(el => <option>{el.month}</option>)}
                </select>
                {formik.touched.month && formik.errors.month && <p>{formik.errors.month}</p>}
            </div>
    
            <div className={`${style.two} ${style.content}`}>
                <select className={formik.touched.day && formik.errors.day ? style.eror : ''} value={formik.values.day} onChange={(e) => formik.setFieldValue('day',e.target.value)} onBlur={() => formik.setFieldTouched('day',true)}>
                    <option value="">Day</option>
                    {days.map(el => <option>{el}</option>)}
                 </select>
                {formik.touched.day && formik.errors.day && <p>{formik.errors.day}</p>}
            </div>
            <div className={`${style.three} ${style.content}`}>
                <select className={formik.touched.year && formik.errors.year? style.eror  : ''} value={formik.values.year} onChange={(e) => formik.setFieldValue('year',e.target.value)} onBlur={() => formik.setFieldTouched('year',true)}>
                    <option value="">Year</option>
                    {res.map(el => <option>{el}</option>)}
                </select>
                {formik.touched.year && formik.errors.year && <p>{formik.errors.year}</p>}
            </div>
        </form>
    )
}

export { DataYear }