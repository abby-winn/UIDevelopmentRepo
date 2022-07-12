/* eslint-disable prettier/prettier */
import Navbar from './navbar';
import Title from './title';
import Admin from './registerAdmin';

export default function header(){


    return (
        <div>
            <Navbar />
            <Title />
            <Admin /> 
        </div>
    );
}