import { HomeOutlined } from "@ant-design/icons"
import { Breadcrumb } from "antd"
import Link from "next/link"

const UMbreadCrumb = (
    {
        items
    }: {
        items: {
            label: string,
            link: string
        }[],
    }
) => {

    const breadcrumbItems = [
        {
            title: (
                <Link href="/">
                    <HomeOutlined />
                </Link>
            )
        },
        ...items.map(item => ({

            title: item.link ? (
                <Link href={item.link}>
                    {item.label}
                </Link>
            ) : (
                <span>{item.label}</span>
            )
        }))
    ]

    return (
        <Breadcrumb style={{
            margin: '0px 10px'
        }}
            items={breadcrumbItems}></Breadcrumb>
    )
}

export default UMbreadCrumb