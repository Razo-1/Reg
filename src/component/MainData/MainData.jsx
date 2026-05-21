import { Formik } from "formik"
import { DataName } from "../DataName/DataName";
import { DataYear } from '../DataYear/DataYear.jsx'
import style from './MainData.module.css'


function MainData({ schemValid,dataBird,schemaBirthday,res }){
    return(
        <Formik 
        initialValues={{
            name:'',
            lastname:'',
            email:'',
            password:'',
            confirmPassword:''
        }}
        onSubmit={(value) => console.log('hello')}
        validationSchema={schemValid}
        validateOnBlur
        >
            {({values,errors,handleChange,handleSubmit,handleBlur,isValid,dirty,touched}) => (
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
                    <DataYear dataBird={dataBird} schemaBirthday={schemaBirthday} res={res}/>
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
                    <button>Submit</button>
                </div>
            )}
        </Formik>
    )
    
}

export { MainData }