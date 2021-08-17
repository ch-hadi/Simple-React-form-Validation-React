import React , {useState} from 'react';

const SimpleInput = (props) => {
const [enteredName , setEnteredName]=useState('');
const [enteredNameTouched , setEnteredNameTouched] = useState(false);
const [enterdMail , setEnteredEmail]= useState('');
const [enteredEmailTouched , setEnteredEmailTouched] = useState(false);

const enteredNameIsValid=enteredName.trim() !=='';
const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

const emailVaid =enterdMail.trim().includes('@');
const EmailInputIsInvalid = !emailVaid && enteredEmailTouched;


const inputchangeHandler=(event)=>{

      setEnteredName(event.target.value);
  
} 

const emailchangeHandler =(event)=>{
  setEnteredEmail(event.target.value);
}

const emailBlurHandler=(event)=>{
  setEnteredEmailTouched(true);
}

const inputBlurHandler =(event)=>{

  setEnteredNameTouched(true);

}

const formSubmitHandler=(event)=>{
  event.preventDefault();
  setEnteredNameTouched(true);
  setEnteredEmailTouched(true);

  if (!enteredNameIsValid || !emailVaid ){
    return;
  }
  console.log(enteredName, enterdMail);
  setEnteredName('');
  setEnteredEmail('');
  setEnteredNameTouched(false);
  setEnteredEmailTouched(false);
}
// const nameInputClass = nameInputIsInvalid ? 'form-control invalid' : 'form-control' ;
// const alterEmail = EmailInputIsInvalid ? 'form-control invalid' : 'form-control' ;
return (
    <form>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name' 
        onChange={inputchangeHandler}
        onBlur={inputBlurHandler}
        value={enteredName}
        />
        {nameInputIsInvalid && (<p className='error-text'>No !!</p>)}
      </div>
      <div className='form-control'>
        <label htmlFor='email'>Your Email</label>
        <input 
        type='email' 
        id='email' 
        onChange={emailchangeHandler}
        onBlur={emailBlurHandler}
        value={enterdMail}
        />
        {EmailInputIsInvalid && (<p className='error-text'>No !!</p>)}
      </div>
      <div className="form-actions">
        <button onClick={formSubmitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
