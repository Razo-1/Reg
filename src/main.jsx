import { schemValid,dataBird,res} from './help/help.js'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
<App schemValid={schemValid} dataBird={dataBird} res={res}/>
)
