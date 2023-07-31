import React, { useContext } from 'react'
import NavigationContext from '../context/navigationContext'
function Link({to, children}) {

    const {navigate} = useContext(NavigationContext)
    const href = (e) => {
        e.preventDefault()
        navigate(to)
    }
  return (
    <a onClick={href}>{children}</a>
  )
}

export default Link