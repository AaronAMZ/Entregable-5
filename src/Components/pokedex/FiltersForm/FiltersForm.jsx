import { useEffect, useState } from "react"
import "./FiltersForm.css"
import { Form } from "react-router-dom";
import { getAllTypes } from "../../../services/getAllTypes";

const FiltersForm = ({nameInitial, typeInitial}) => {
    const [types, setTypes] = useState([]);
    const [nameValue, setNameValue] = useState(nameInitial);
    const [typeValue, setTypeValue] = useState(typeInitial);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setNameValue(newValue);
    };

    const handleTypeChange = (e) => {
        const newTypeValue = e.target.value;
        setTypeValue(newTypeValue);
    }

    useEffect(() =>{
      const loadTypes = async () => {
        const typesList = await getAllTypes();
        setTypes(typesList);
      };

      loadTypes();
    }, [])

    useEffect(() => {
      setNameValue(nameInitial);
      setTypeValue(typeInitial);
    }, [nameInitial, typeInitial])

  return (
    <Form className="form">
        <h2>Filtros para la búsqueda</h2>
        <div className="form_inputs_container">
            <div className="second_container">
            <input 
            value={nameValue}
            onChange={handleChange}
            type="text" 
            placeholder="🔍 Escribe el nombre de tu pokemon" 
            name="pokemonName" 
            className="form_input_name"/>

            <button className="form_btn">Buscar</button>
              
            </div>
            <div className="select">
            <select name="pokemonType" value={typeValue} className="form_input_type" onChange={handleTypeChange}>
              <option value="">All pokemons</option>
              {types.map((type) => (
              <option key={type.id} value={type.id}>{type.name}</option>))}
            </select>

            </div>
        </div>

    </Form>
  )
}

export default FiltersForm