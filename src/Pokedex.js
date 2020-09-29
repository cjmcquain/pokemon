import React, { Component } from 'react';
import Pokecard from './Pokecard';

class Pokedex extends Component {
    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72}
        ]
    }
    render() {
        return (
            <div className="Pokedex">
            <h1>Pokedex</h1>
            {this.props.pokemon.map((p) => (
                <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
            ))}
        </div>
        )
    }
}

export default Pokedex;