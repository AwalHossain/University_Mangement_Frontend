import UMbreadCrumb from "@/components/ui/UMbreadCrumb"

const UserPage = () => {
    return (
        <div>
            <UMbreadCrumb
                items={
                    [
                        {
                            label: 'super_admin',
                            link: `/super_admin`
                        },
                    ]
                }
            />

        </div>
    )
}

export default UserPage