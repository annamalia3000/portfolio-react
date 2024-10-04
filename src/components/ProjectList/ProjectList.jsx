/* eslint-disable react/prop-types */
import Masonry from 'react-masonry-css';
import classes from '../Portfolio/portfolio.module.css';

export const ProjectList = ({ projects }) => {
    const breakpointColumnsObj = {
        default: 3, // 3 колонки по умолчанию
        1100: 3,    // 3 колонки для экранов шириной до 1100px
        700: 2,     // 2 колонки для экранов шириной до 700px
        500: 1      // 1 колонка для экранов шириной до 500px
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj} 
            className={classes['project-list']}    
            columnClassName={classes['project-list-column']} 
        >
             {projects.map((project, index) => (
                 <div key={index} className={classes['project-item']}>
                   <img 
                       src={project.img} 
                       alt={project.category} 
                       className={classes['project-image']}
                    />
                 </div>
                ))}
        </Masonry>

    ) 
}