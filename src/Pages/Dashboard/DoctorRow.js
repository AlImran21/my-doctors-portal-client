import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, specialist, img, email } = doctor;

    
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded-full">
                        <img src={img} alt='' />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialist}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-error btn-xs">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;