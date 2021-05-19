import React, { useState } from 'react';

const Input = (props) => {
  const { skillList, setSkillList } = props;
  // State Review
  // useState() returns an array with a "Getter" variable AND a "Setter" method
  //    Getter ==> newskill
  //    Setter ==> setNewSkill
  // we destructure the getter and setter from the returned array
  //    so we have local variables to use going forward
    const [ newSkill, setNewSkill ] = useState("");
    // const [ skillList, setSkillList ] = useState([]);
    const [ superSkilled, setSuperSkilled ] = useState(false);

    const submitHandler = (e) => {
        // never let the browser refresh the page on submit
        //  it will erase ALL of the things in state!
        e.preventDefault();

        console.log("Adding new skill: " + newSkill);

        const myNewSkill = {
          skillName: newSkill,
          superSkilled: superSkilled
        }

        // setSkillList( [ ...skillList, newSkill ] ); // add new skill to the last
        
        //  setter methods are "asynchronous" - they will not change the value in the getter
        //     until the entire function is done running!
        //  I ALWAYS use setter methods at the END of the function, so I don't count
        //     on the new value to soon!

        //  add the new skill to the original array of skills
        setSkillList( [ myNewSkill, ...skillList ] );
        setNewSkill("")
        console.log("just reset new skill: " + newSkill);
    }

  return (
    <div>
      <h4>Skills Form for { props.name }</h4>
      <form onSubmit={ (e) => submitHandler(e) }>
       {/* conditional rendering */}
        {
          newSkill.length > 0 && newSkill.length < 3 ?
            <span>Your skill must be at least 3 characters long</span>
            : null
        }
        <p>
          <label>Type in your skill:</label>
          <input
            type="text"
            name="newSkill"
            value={ newSkill }
            onChange={ (e) => setNewSkill(e.target.value) }
          />
        </p>
        <p>
          <input
            type="checkbox"
            name="superSkilled"
            checked={ superSkilled }
            onChange = { (e) => setSuperSkilled(e.target.checked)}
          />
          Are you Super Skilled at this?
        </p>
        <button type="submit">Add Skill</button>
      </form>
    </div>
  )
}

export default Input;
