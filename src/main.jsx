import { schemValid,dataBird,res} from './data/data.js'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
<App schemValid={schemValid} dataBird={dataBird} res={res}/>
)
