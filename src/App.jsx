import { Bar } from './component/RegistrationBar/Bar'
import style from './App.module.css'


function App({ schemValid }){
  return(
    <div>
      <Bar schemValid={schemValid}/>
    </div>
  )
}

export { App }