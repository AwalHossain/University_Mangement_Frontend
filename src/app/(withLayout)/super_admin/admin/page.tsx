'use client'

import ActionBar from "@/components/ui/ActionBar"
import UMbreadCrumb from "@/components/ui/UMbreadCrumb"
import UmTable from "@/components/ui/UmTable"
import { useAdminsQuery } from "@/redux/api/adminApi"
import { useDebounced } from "@/redux/hooks"
import { IDepartment } from "@/types"
import {
    DeleteOutlined,
    EditOutlined,
    EyeOutlined
} from "@ant-design/icons"
import { Button, Input } from "antd"
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

    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");

    query["limit"] = size;
    query["page"] = page;
    query["sortBy"] = sortBy;
    query["sortOrder"] = sortOrder;

    const debouncedSearchTerm = useDebounced({
        searchQuery: searchTerm,
        delay: 600,
    });

    if (!!debouncedSearchTerm) {
        query["searchTerm"] = debouncedSearchTerm;
    }
    const { data, isLoading, isFetching } = useAdminsQuery({ ...query });

    const admins = data?.admins;
    const meta = data?.meta;

    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            sorter: true,
        },
        {
            title: "Name",
            dataIndex: "name",
            render: function (data: Record<string, string>) {
                const fullName = `${data?.firstName} ${data?.middleName} ${data?.lastName}`;
                return <>{fullName}</>;
            },
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Department",
            dataIndex: "managementDepartment",
            render: function (data: IDepartment) {
                return <>{data?.title}</>;
            },
        },
        {
            title: "Designation",
            dataIndex: "designation",
        },
        {
            title: "Created at",
            dataIndex: "createdAt",
            render: function (data: any) {
                return data && dayjs(data).format("MMM D, YYYY hh:mm A");
            },
            sorter: true,
        },
        {
            title: "Contact no.",
            dataIndex: "contactNo",
        },
        {
            title: "Action",
            dataIndex: "id",
            render: function (data: any) {
                return (
                    <>
                        <Link href={`/super_admin/admin/details/${data.id}`}>
                            <Button onClick={() => console.log(data)} type="primary">
                                <EyeOutlined />
                            </Button>
                        </Link>
                        <Link href={`/super_admin/admin/edit/${data.id}`}>
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
                        <Button onClick={() => console.log(data)} type="primary" danger>
                            <DeleteOutlined />
                        </Button>
                    </>
                );
            },
        },
    ];

    const onPaginationChange = (page: number, noPage: number | undefined) => {
        console.log('page', page, 'pageSize', size);
        setPage(page || 1)
        setSize(noPage || 10)
    };




    const onTableChange = (pagination: any,
        filters: any,
        sorter: any,
    ) => {
        const { field, order } = sorter;
        setSortBy(field || "");
        setSortOrder(order === 'ascend' ? "asc" : "desc");

        console.log('params', sorter, 'min', filters);
    };


    const resetFilter = () => {
        setSearchTerm("");
        setSortBy("");
        setSortOrder("");

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

            <ActionBar title="Admins" >
                <div>
                    <Input
                        size="large"
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div
                >
                    <Link style={{
                        margin: '0 1rem',
                    }}
                        href={`/${base}/admin/create`}>
                        <Button type="primary">Add Admin</Button>
                    </Link>
                    {
                        (!!searchTerm || !!sortBy || !!sortOrder) ?
                            <Button type="primary" onClick={resetFilter}>Reset Filter</Button> : null
                    }
                </div>
            </ActionBar>
            <div>
                <UmTable
                    loading={isFetching}
                    pageSize={size}
                    totalPages={meta?.total}
                    showSizeChanger={true}
                    columns={columns}
                    dataSource={admins}
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