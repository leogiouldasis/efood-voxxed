import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import Countdown from 'react-countdown';
import { Link, Head } from '@inertiajs/inertia-react';
import { countBy } from 'lodash';

export default function Dashboard(props) {
    console.log(props)
    const users = props.users.map((user, userIdx) => <li className={userIdx <= 9 ? "winner" : ""} key={user.id}>{user.shuffle_rank + ")"} {user.name + " "}</li>);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Efood Voxxed Randomizer!</h2>}
        >
            <Head title="Voxxed Randomizer" />

            <div className="total">
                {"Total registrations: " + users.length} / Registrations Closing 15:00
            </div>

            <div className="countdown">
            {/* <Countdown date={Date.now() + 10000} /> */}
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg winners-list">
                        {users}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
