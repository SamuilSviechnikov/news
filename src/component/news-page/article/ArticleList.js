import React from 'react';
import Article from './Article';
import { Link } from 'react-router-dom';

const ArticleList = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
          <main>
            <Link to={'/project/' + project.id} key={project.id}>
              <Article project={project} />
            </Link>
          </main>
        )
      })}  
    </div>
  )
}

export default ArticleList