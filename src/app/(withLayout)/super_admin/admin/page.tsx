import UMbreadCrumb from "@/components/ui/UMbreadCrumb"

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
            Admin Page for Super Admin</div>
    )
}

export default Admin