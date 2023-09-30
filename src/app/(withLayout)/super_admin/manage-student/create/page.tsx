import UMbreadCrumb from "@/components/ui/UMbreadCrumb"

const CreateStuentPage = () => {
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
                            label: 'Manage student',
                            link: `/${base}/manage-student`
                        }
                    ]
                }
            />

        </div>
    )
}

export default CreateStuentPage