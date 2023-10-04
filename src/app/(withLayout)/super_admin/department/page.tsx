'use client'

import ActionBar from "@/components/ui/ActionBar"
import UMbreadCrumb from "@/components/ui/UMbreadCrumb"
import UmTable from "@/components/ui/UmTable"
import { Button, Input, Space, Tag } from "antd"
import type { ColumnsType } from 'antd/es/table'
import Link from "next/link"
import { useState } from "react"


interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];


const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <Button type='primary' onClick={() => console.log('deleteing')} >Delete</Button>
            </Space>
        ),
    },
];
const DepartmentPage = () => {
    const base = 'super_admin'
    const [page, setPag] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(10)
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [sortBy, setSortBy] = useState<string>("");
    const [order, setOrder] = useState<string>("");

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

    const onSearch = (value: string) => {
        setSearchTerm(value);
    }

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
                        (!!searchTerm || !!sortBy || !!order) ?
                            <Button type="primary" onClick={resetFilter}>Reset Filter</Button> : null
                    }
                </div>
            </ActionBar>
            <div>
                <UmTable
                    loading={false}
                    pageSize={pageSize}
                    totalPages={100}
                    showSizeChanger={true}
                    columns={columns}
                    dataSource={data}
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