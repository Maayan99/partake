import UsersGrid from "@components/components/users-grid/users-grid";
import PrimaryButton from "@components/components/common/primary-button";
import Icon from "@components/components/common/icon/icon";
import AdminNav from "@components/layout/admin-nav/admin-nav";
import Head from "next/head";

export default function AdminUsers() {
    const baseUrl = '/admin/oiuadsfhli1u32e';
    return (
        <>
            <Head>
                <title>Users</title>
            </Head>
            <div className="flex bg-light-gray">
                <AdminNav baseUrl={baseUrl}/>
                <div className="px-16 py-32 space-y-8">
                    <UsersGrid numberOfRows={25}/>
                    <div className="flex space-x-3 items-center">
                        <PrimaryButton className="flex items-center">
                            <Icon name="donation" className="mr-2"/>
                            Add users
                        </PrimaryButton>
                        <PrimaryButton>
                            Quick manage
                        </PrimaryButton>
                    </div>

                    <div className="grid grid-cols-3 gap-9 w-full">
                        <h1>Total active users <span className="text-blue">315</span></h1>
                        <h1>Completed give activities <span className="text-blue">324</span></h1>
                        <h1>Ongoing give activities <span className="text-blue">908</span></h1>
                        <h1>Total activities <span className="text-blue">674</span></h1>
                        <h1>Completed take activities <span className="text-blue">352</span></h1>
                        <h1>Ongoing take activities <span className="text-blue">908</span></h1>
                    </div>
                </div>
            </div>
        </>
    )
}