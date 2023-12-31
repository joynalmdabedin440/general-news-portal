import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data=>setCategories(data))
          
    },[])

    return (
        <div>
           
            <div>
                {
                    categories.map(category => <p>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
               } 
            </div>
        </div>
    );
};

export default LeftSideNav;