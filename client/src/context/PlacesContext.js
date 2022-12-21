import React, {useState, createContext} from 'react'


export const PlacesContext = createContext()

export const PlacesContextProvider = props => {
  const [places, setPlaces] =useState([])
  const addPlaces = (place) =>{
    setPlaces([...places, place])
  }
    return (
      <PlacesContext.Provider value={{places:places, setPlaces, addPlaces}}>
        {props.children}
      </PlacesContext.Provider>
    )
}
