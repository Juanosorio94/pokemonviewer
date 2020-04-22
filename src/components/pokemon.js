import React, {Component} from 'react';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      types: [],
      img_src: '',
      pokemon_id: '',
      pokemon_name: '',
    }
  }

  componentDidMount() {
    let uri = `https://pokeapi.co/api/v2/pokemon/${this.props.id}`;
    fetch(uri)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            img_src: result["sprites"]["front_default"],
            pokemon_name: result["name"],
            pokemon_id: result["id"],
            types: result["types"]
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    return(
    <div className=''>
      <div className='card bg-light' style={{width: '18rem'}}>
        <Sprite imgSrc={this.state.img_src} />
        <PokeID name={this.state.pokemon_name} id={this.state.pokemon_id} types={this.state.types} />
      </div>
    </div>
    );
  }
}

const Pokemonfn = (props) => {
  const {sprite, pokemon_name, pokemon_id, types} = props;
  return(
    <div className='card h-100' style='width: 18rem;'>
      <Sprite imgSrc={sprite}/>
      <PokeID name={pokemon_name} id={pokemon_id} types={types}/>
    </div>
  );
}


const Sprite = ({imgSrc}) => {

  return (
    <div className=''>
      <img className='card-img-top' src={imgSrc} />
    </div>
  );
}

const PokeID = ({name, types, id}) => {
  return (
    <>
        <h5 class='card-title d-flex justify-content-around'>
          {name}
          <small class="text-muted"> &nbsp; ID: {id}</small>
        </h5>
      { types &&
      <div>  
        {/* <div className='card-text d-flex justify-content-center'>Type{types.length > 1 && 's'}</div> */}
          <ul className='card text list-group list-group-flush'>
          {types.map(type => (
            <li  className='list-group-item' key={type.type.name}>{type.type.name}</li>
          ))}
          </ul>
      </div>
      }
    </>
  );
}

export default Pokemonfn;
export {Pokemon};