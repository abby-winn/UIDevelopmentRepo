/* eslint-disable prettier/prettier */
import Navbar from './navbar';
import Title from './title';
import Admin from './registerAdmin';
import Inactive from './inactiveAdmin';
import Delete from './deleteAdmin';

export default function header(){


    return (
        <div>
            <Navbar />
            <Title />
            <Admin /> 
            <Inactive />
            <Delete />
        </div>
    );
}