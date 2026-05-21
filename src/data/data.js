import * as yup from 'yup';

const schemValid = yup.object().shape({
    name: yup
        .string()
        .min(2,'The name must be at least 2 letters long.')
        .max(15,'The maximum length of a name should not exceed 15 letters.')
        .required('write your name'),
    lastname: yup
        .string()
        .min(2,'The second name must be at least 2 letters long.')
        .max(15,'The maximum length of a second name should not exceed 15 letters.')
        .required('write your name'),
    email: yup
        .string()
        .email('Please write the correct email address.')
        .required('write your email'),
    password: yup
        .string()
        .typeError('Please write the correct Password')
        .required('write your password'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'),'the password does not match'])
        .required('Confirm your password'),
    month: yup
        .string()
        .required('Select a month'),
    day: yup
        .number()
        .required('Select a day'),
    year:yup
        .number()
        .required('Select a year'),

    gender:yup
        .string()
        .required('Selecet a gender')
})

const dataBird = [
  { month: 'january', days: 31 },
  { month: 'february', days: 28 },
  { month: 'march', days: 31 },
  { month: 'april', days: 30 },
  { month: 'may', days: 31 },
  { month: 'june', days: 30 },
  { month: 'july', days: 31 },
  { month: 'august', days: 31 },
  { month: 'september', days: 30 },
  { month: 'october', days: 31 },
  { month: 'november', days: 30 },
  { month: 'december', days: 31 },
]

let res = []

for(let i = 2008;i >= 1980 ;i--){
    res.push(i)
}


export { schemValid,dataBird,res}


