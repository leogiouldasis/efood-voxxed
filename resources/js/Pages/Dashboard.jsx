import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/inertia-react';
import { countBy } from 'lodash';

export default function Dashboard(props) {
    const users = props.users.map((user) => <li key={user.id}>{user.name}</li>);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Efood Voxxed Randomizer!</h2>}
        >
            <Head title="Voxxed Randomizer" />

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
