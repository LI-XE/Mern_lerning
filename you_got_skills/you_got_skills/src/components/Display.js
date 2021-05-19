import React from 'react';

const Display = (props) => {
  const { skillList } = props;

  return (
      <div>
          Display skill List for { props.name }
          {
            skillList.map((skill, skillListIndex) => (
                <p key={ skillListIndex }>
                    { skill.skillName }, 
                    {
                      skill.superSkilled ?
                      <span>They are super skilled at this!!!</span>
                      : <span>They are pretty good at this!</span>
                    }
                </p>
            ))
          }
      </div>
  )
}

export default Display;