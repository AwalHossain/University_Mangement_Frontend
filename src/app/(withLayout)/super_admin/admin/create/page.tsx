import UMbreadCrumb from "@/components/ui/UMbreadCrumb"

const CreateAdminPage = () => {
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
                            label: 'Admin',
                            link: `/${base}/admin`
                        }
                    ]
                }
            />
            Create Admin Page</div>
    )
}

export default CreateAdminPage