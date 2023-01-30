import React, { useEffect } from 'react'
import { fullLink } from './link'
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

function VerifyComplete() {
    const { username, id } = useParams()
    const navigate = useNavigate()

    let vdata = fetch(`${fullLink}/verify_link/${username}/${id}`)
        .then(data => data.json())
        .then(result => {
            if (result.message == "sign success") {
                toast.success("verification success redirecting to login page")
                setTimeout(() => {
                    navigate("/")
                }, 3000);

            } else {
                toast.success("verification link expired")
            }
        })




    return (
        <div>

        </div>
    )
}

export default VerifyComplete