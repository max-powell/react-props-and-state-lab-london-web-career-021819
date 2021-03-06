import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    const { pets, onAdoptPet } = this.props

    return <div className="ui cards">{
        pets.map(p => <Pet key={p.id} pet={p} onAdoptPet={onAdoptPet} />)
      }</div>
  }
}

export default PetBrowser
