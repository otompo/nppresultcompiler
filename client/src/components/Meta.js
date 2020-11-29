
import React from 'react';
import {Helmet} from 'react-helmet'
const Meta = ({title, description, keywords}) => {
    return (
 
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta name='keywords' content={keywords}/>
        </Helmet>
       
    );
};
Meta.defaultProps={
    title:'NPP | Home',
    description:'We provide solutions to how you can propaerly manage your waste, and we also provide waste pickup services',
    keywords:'waste, education, waste management,recycling tips'
}
export default Meta;