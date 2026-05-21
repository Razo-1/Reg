import { Formik } from "formik"
import { DataName } from "../DataName/DataName";
import { DataYear } from '../DataYear/DataYear.jsx'
import { Gender } from "../Gender/Gender.jsx";
import style from './MainData.module.css'


function MainData({ schemValid,dataBird,res}){
    
    return(
        <Formik 
        initialValues={{
            name:'',
            lastname:'',
            email:'',
            password:'',
            confirmPassword:'',
            month:'',
            day:'',
            year:'',
            gender : '',
        }}
        onSubmit={(value) => console.log('hello')}
        validationSchema={schemValid}
        validateOnBlur
        >
            {({values,errors,handleChange,handleSubmit,handleBlur,isValid,dirty,touched,setFieldTouched,setFieldValue}) => (
                <div className={style.block}>
                    <DataName
                    name="name"
                    text='Enter your Name'
                    value={values.name}
                    error={errors.name}
                    touched={touched.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type='text'
                    />
                    <DataName
                    name="lastname"
                    text='Enter your Second Name'
                    value={values.lastname}
                    error={errors.lastname}
                    touched={touched.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type='text'
                    />
                    <DataYear
                    res={res}
                    dataBird={dataBird}
                    values={values}
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                    />
                    <Gender 
                    values={values}
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                    />
                    <DataName
                    name="email"
                    text='Enter your email'
                    value={values.email}
                    error={errors.email}
                    touched={touched.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type='email'
                    />
                    <DataName
                    name="password"
                    text='Enter your password'
                    value={values.password}
                    error={errors.password}
                    touched={touched.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type='password'
                    />
                    <DataName
                    name="confirmPassword"
                    text='Enter your confirm password'
                    value={values.confirmPassword}
                    error={errors.confirmPassword}
                    touched={touched.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type='password'
                    />
                    <button type="submit" disabled={isValid && dirty} onClick={handleSubmit}>Submit</button>
                </div>
            )}
        </Formik>
    )
    
}

export { MainData }