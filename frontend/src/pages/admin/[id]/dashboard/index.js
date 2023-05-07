import AdminNav from "@components/layout/admin-nav/admin-nav";
import UsersGrid from "@components/components/users-grid/users-grid";
import DashboardCard from "@components/components/cards/dashboard-card/dashboard-card";
import PrimaryButton from "@components/components/common/primary-button";
import Icon from "@components/components/common/icon/icon";

export default function AdminDashboard() {
    const baseUrl = '/admin/oiuadsfhli1u32e';
    return (
        <div className="flex bg-light-gray">
            <AdminNav baseUrl={baseUrl}/>
            <div className="px-16 py-32 space-y-8">
                <div className="space-y-10">
                    <h1 className="font-bold">Welcome, Evyatar</h1>
                    <DashboardCard className="relative">
                        <UsersGrid numberOfRows={5} paginate={false}/>
                        <a href={`${baseUrl}/users`}>
                            <p className="absolute bottom-10 right-8 font-bold text-blue">Go to users page</p>
                        </a>
                    </DashboardCard>
                </div>
                <div className="flex space-x-8">
                    <div className="space-y-8 w-1/2">
                        <DashboardCard className="space-y-7 text-blue relative min-h-[380px]">
                            <h1 className="text-black">Activities</h1>
                            <PrimaryButton className="flex">
                                <Icon name="donation"/>
                                Add a new activity
                            </PrimaryButton>
                            <p className="font-bold">See suggested new activities</p>
                            <p className="font-bold">2004 open activities</p>
                            <a href={`${baseUrl}/activities`}>
                                <p className="absolute bottom-10 right-8 font-bold">Go to activities page</p>
                            </a>
                        </DashboardCard>
                        <DashboardCard>

                        </DashboardCard>
                        <DashboardCard>

                        </DashboardCard>
                    </div>
                    <div className="space-y-8 w-1/2">
                        <DashboardCard>

                        </DashboardCard>
                        <DashboardCard>

                        </DashboardCard>
                        <DashboardCard>

                        </DashboardCard>
                    </div>
                </div>
            </div>
        </div>
    );
}