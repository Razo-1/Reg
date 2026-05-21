import { Bar } from './component/RegistrationBar/Bar'
import style from './App.module.css'


function App({ schemValid,dataBird,schemaBirthday,res,schemaGender}){
  return(
    <div>
      <Bar schemValid={schemValid} dataBird={dataBird} res={res}/>
    </div>
  )
}

export { App }