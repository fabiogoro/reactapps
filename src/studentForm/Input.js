import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

function Input({type, name, placeholder, icon, options, required, onChange, minlength}) {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{name}</Form.Label>
      <InputGroup>
        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={icon} /></InputGroup.Text>  
        {
          type=="radio"?(
            <div className="btn-group">
              {options.map((o, i)=>(
                <>
                  <input 
                    type="radio"
                    key={i}
                    className="btn-check"
                    id={`radio-${i}`}
                    name={name}
                    variant="secondary"
                    value={o} 
                    required={required}/>
                  <label className="btn btn-secondary" htmlFor={`radio-${i}`}>{o}</label>
                </>
              ))}
            </div>
          )
          :options?(
            <Form.Select required={required}>
              <option value="">{placeholder?placeholder:`Enter ${name}`}</option>
              {options.map((o,i)=><option key={i} value={o}>{o}</option> )}
            </Form.Select>
          ):(
            <Form.Control 
              as={type=="textarea"?type:"input"} 
              type={type} 
              name={name}
              placeholder={placeholder?placeholder:`Enter ${name}`} 
              onChange={onChange}
              required={required}
              minlength={minlength}/>
          )
        }
      </InputGroup>
    </Form.Group>
  )

}

export default Input
