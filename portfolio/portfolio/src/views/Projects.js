import React from 'react';
import Project from '../components/Project';

const Projects = () => {
    return (
        <div>
            <h4>This is the Projects component</h4>
            <Project title={"Window Wizard"} description={"College student window washing"} />
            <Project title={"Puppy Rescue"} description={"Find a foster family for puppies"} />
            <Project title={"Restroom Rater"} description={"Ratings for public restrooms"} />
        </div>
    )
}

export default Projects;