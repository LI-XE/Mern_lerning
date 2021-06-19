import React from 'react';
import Project from '../components/Project';

const Projects = (props) => {
    return (
        <div>
            <h4>This is the Projects component</h4>
            <Project title={"Window Wizard"} description={"College student window washing"} startingLikeCount={ 5 } />
            <Project title={"Puppy Rescue"} description={"Find a foster family for puppies"} startingLikeCount={ 6 } />
            <Project title={"Restroom Rater"} description={"Ratings for public restrooms"} startingLikeCount={ 2 } />
        </div>
    )
}

export default Projects;