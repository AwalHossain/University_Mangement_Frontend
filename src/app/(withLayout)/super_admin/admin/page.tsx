import ActionBar from "@/components/ui/ActionBar"
import UMbreadCrumb from "@/components/ui/UMbreadCrumb"
import { Button } from "antd"
import Link from "next/link"

const Admin = () => {
    const base = 'super_admin'
    return (
        <div>
            <UMbreadCrumb
                items={
                    [
                        {
                            label: `${base}`,
                            link: `/${base}`
                        },
                    ]
                }
            />

            <ActionBar title="Admin List">
                <Link href={`/${base}/admin/create`}>
                    <Button type="primary">Add Admin</Button>
                </Link>
            </ActionBar>

        </div>
    )
}

export default Admin