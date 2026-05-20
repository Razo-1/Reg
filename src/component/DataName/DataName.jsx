import style from './DataName.module.css'

function DataName({ name,text,value,error,touched,onChange,onBlur,type}){
    let check = touched && error
    return (
        <div className={style.content}>
        <input className={check ? style.on : ''} type={type}  value={value} placeholder={text} name={name} onChange={onChange} onBlur={onBlur}/>
        {touched && error && <p>{error}</p>}
        </div>
    )
}

export { DataName }