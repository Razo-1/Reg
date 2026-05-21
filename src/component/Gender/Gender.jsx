import style from './Gender.module.css'

function Gender({ values,errors,touched,setFieldValue,setFieldTouched }){
    let gender = ['male','female']
    
    return(  
        <div className={style.data}>
            <div className={`${style.one} ${style.content}`}>
                <select className={touched.gender && errors.gender  ? style.eror : ''} value={values.gender} onChange={(e) => setFieldValue('gender',e.target.value)} onBlur={(e) => setFieldTouched('gender',true)}>
                    <option value="">Select your gender</option>
                    {gender.map(el => <option key={el} value={el}>{el}</option>)}
                </select>
                {touched.gender && errors.gender && <p>{errors.gender}</p>}
            </div>
        </div>
            
    )
} 

export { Gender }