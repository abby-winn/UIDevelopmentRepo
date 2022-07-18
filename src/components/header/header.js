/* eslint-disable prettier/prettier */
import Navbar from './navbar';
import Title from './title';
import Admin from './registerAdmin';
import Inactive from './inactiveAdmin';
import Edit from './edit-modal/edit-modal';
import Delete from './deleteAdmin';
import AdminTable from './AdminTable';

export default function header(){


    return (
        <div>
            <Navbar />
            <Title />
            <AdminTable />
            <Inactive />
            <Admin />
        </div>
    );
}