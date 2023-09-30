import ActionBar from "@/components/ui/ActionBar"
import UMbreadCrumb from "@/components/ui/UMbreadCrumb"
import { Button } from "antd"
import Link from "next/link"

const DepartmentPage = () => {
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

            <ActionBar title="Department" >
                <Link href={`/${base}/department/create`}>
                    <Button type="primary">Add Department</Button>
                </Link>
            </ActionBar>

        </div>
    )
}

export default DepartmentPage