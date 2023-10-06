'use client'

import ActionBar from "@/components/ui/ActionBar"
import UMbreadCrumb from "@/components/ui/UMbreadCrumb"
import UmTable from "@/components/ui/UmTable"
import { useDeleteDepartmentMutation, useDepartmentsQuery } from "@/redux/api/departmentApi"
import {
    DeleteOutlined,
    EditOutlined
} from "@ant-design/icons"
import { Button, Input, message } from "antd"
import dayjs from "dayjs"
import Link from "next/link"
import { useState } from "react"


interface DataType {
    key: string;
    title: string;
    age: number;
    address: string;
    tags: string[];
}



const DepartmentPage = () => {
    const base = 'super_admin'

    const query: Record<string, any> = {};

    const [page, setPag] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(10)
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setOrder] = useState<string>("");

    query['page'] = page
    query['limit'] = pageSize
    query['sortBy'] = sortBy
    query['sortOrder'] = sortOrder
    query['searchTerm'] = searchTerm


    const [deleteDepartment] = useDeleteDepartmentMutation()
    const { data, isLoading } = useDepartmentsQuery({ ...query })

    const { departments, meta } = data || {}

    const onSearch = (value: string) => {
        setSearchTerm(value);
    }


    const deleteHandler = async (id: string) => {
        message.loading("Deleting.....");
        try {
            const data = await deleteDepartment(id);
            message.success("Department deleted successfully");
        } catch (error) {
            message.error("Something went wrong");
            console.log(error)
        }
    };

    const columns = [
        {
            title: "Title",
            dataIndex: "title",
        },
        {
            title: "CreatedAt",
            dataIndex: "createdAt",
            render: function (data: any) {
                return data && dayjs(data).format("MMM D, YYYY hh:mm A");
            },
            sorter: true,
        },
        {
            title: "Action",
            render: function (data: any) {
                return (
                    <>
                        <Link href={`/super_admin/department/edit/${data?.id}`}>
                            <Button
                                style={{
                                    margin: "0px 5px",
                                }}
                                onClick={() => console.log(data)}
                                type="primary"
                            >
                                <EditOutlined />
                            </Button>
                        </Link>
                        <Button
                            onClick={() => deleteHandler(data?.id)}
                            type="primary"
                            danger
                        >
                            <DeleteOutlined />
                        </Button>
                    </>
                );
            },
        },
    ];

    const onPaginationChange = (page: number, noPage: number | undefined) => {
        console.log('page', page, 'pageSize', pageSize);
        setPag(page || 1)
        setPageSize(noPage || 10)
    };




    const onTableChange = (pagination: any,
        filters: any,
        sorter: any,
    ) => {
        const { field, order } = sorter;
        setSortBy(field || "");
        setOrder(order === 'ascend' ? "asc" : "desc");

        console.log('params', sorter, 'min', filters);
    };


    const resetFilter = () => {
        setSearchTerm("");
        setSortBy("");
        setOrder("");

    }

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
                <div>
                    <Input
                        size="large"
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => onSearch(e.target.value)}
                    />
                </div>
                <div
                >
                    <Link style={{
                        margin: '0 1rem',
                    }}
                        href={`/${base}/department/create`}>
                        <Button type="primary">Add Department</Button>
                    </Link>
                    {
                        (!!searchTerm || !!sortBy || !!sortOrder) ?
                            <Button type="primary" onClick={resetFilter}>Reset Filter</Button> : null
                    }
                </div>
            </ActionBar>
            <div>
                <UmTable
                    loading={isLoading}
                    pageSize={pageSize}
                    totalPages={meta?.total}
                    showSizeChanger={true}
                    columns={columns}
                    dataSource={departments}
                    onTableChange={onTableChange}
                    showPagination={true}
                    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                    onPaginationChange={onPaginationChange}
                />
            </div>
        </div>
    )
}

export default DepartmentPage