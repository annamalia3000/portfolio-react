/* eslint-disable react/prop-types */
import classes from '../Portfolio/portfolio.module.css';

export const Toolbar = ({ filters, selected, onSelectFilter }) => {
    return (
        <div className={classes['toolbar']}>
            {filters.map((filter, index) => (
                <button 
                    key={index}
                    className={`${classes['toolbar-button']} ${filter === selected ? classes['selected'] : ''}`}
                    onClick={() => onSelectFilter(filter)}
                >
                    {filter}    
                </button>
            ))}
        </div>
    )
}

//using return for btns

// export const Toolbar = ({ filters, selected, onSelectFilter }) => {
//     return (
//         <div className={classes['toolbar']}>
//             {filters.map((filter, index) => {
//                 return (
//                     <button 
//                         key={index}
//                         className={`${classes['toolbar-button']} ${filter === selected ? classes['selected'] : ''}`}
//                         onClick={() => onSelectFilter(filter)}
//                     >
//                         {filter}    
//                     </button>
//                 );
//             })}
//         </div>
//     );
// };

