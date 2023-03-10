const Alerta = ({alerta}) => {
  return (  
    <div className={`${alerta.error ? 'alert-warning' : 'alert-info'} alert text-center`}>
        {alerta.msg}
    </div>
  )
}

export default Alerta