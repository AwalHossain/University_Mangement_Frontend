import UMbreadCrumb from "@/components/ui/UMbreadCrumb"

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
            Department Page </div>
    )
}

export default DepartmentPage