import UMbreadCrumb from "@/components/ui/UMbreadCrumb"

const CreateDepartmentPage = () => {
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
                        {
                            label: 'Manage Department',
                            link: `/${base}/department`
                        }
                    ]
                }
            />

            Create Department Page

        </div>
    )
}

export default CreateDepartmentPage