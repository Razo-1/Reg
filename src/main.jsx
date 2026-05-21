import { schemValid,dataBird,schemaBirthday,res } from './help/help.js'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
<App schemValid={schemValid} dataBird={dataBird} schemaBirthday={schemaBirthday} res={res}/>
)
