import UMbreadCrumb from "@/components/ui/UMbreadCrumb"

const CreateFacultyPage = () => {
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
                            label: 'Manage faculty',
                            link: `/${base}/manage-faculty`
                        }
                    ]
                }
            />
            Create Faculty mentPage</div>
    )
}

export default CreateFacultyPage