import React from 'react';

export default function Skills() {
  const skills = ['JavaScript', 'React', 'CSS', 'HTML'];

  return (
    <section className="skills">
      <h3>Skills</h3>
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </section>
  );
}
