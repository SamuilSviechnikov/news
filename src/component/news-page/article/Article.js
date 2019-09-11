import React from 'react';
import './Article.css';
import { Link } from 'react-router-dom';


const Article = ({project, index}) => {
	
	return (
		<div className="article">
					<img src={project.img} alt={index}/>
					<div class="article__title">{project.title}</div>
					<p>Posted by Sam</p>
        <p className="grey-text">3rd September, 2am</p>
					<div class="article__btn">
						<Link to={'/project/' + project.id} key={project.id}>
							Detailes
						</Link>
					</div>
				</div>
  )
}

export default Article