import { Bar } from './component/RegistrationBar/Bar'
import style from './App.module.css'


function App({ schemValid,dataBird,schemaBirthday,res}){
  return(
    <div>
      <Bar schemValid={schemValid} dataBird={dataBird} schemaBirthday={schemaBirthday} res={res}/>
    </div>
  )
}

export { App }