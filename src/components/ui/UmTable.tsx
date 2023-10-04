
'use client';

import { Table } from "antd";

type UMTableProps = {
    loading?: boolean;
    columns: any,
    dataSource: any,
    pageSize?: any,
    totalPages?: any,
    showSizeChanger?: any,
    onPaginationChange?: (page: number, pageSize: number | undefined) => void,
    onTableChange?: (pagination: any, filters: any, sorter: any) => void,
    showPagination?: boolean,
    showTotal?: (total: number, range: [number, number]) => string
}


const UmTable = ({
    columns,
    dataSource,
    pageSize,
    totalPages,
    showSizeChanger,
    onPaginationChange,
    onTableChange,
    loading,
    showPagination,
    showTotal
}: UMTableProps) => {
    const paginationConfig = showPagination && {
        pageSize: pageSize,
        total: totalPages,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange,
        showTotal: showTotal
    }

    return (
        <Table
            loading={loading}
            columns={columns}
            dataSource={dataSource}
            pagination={paginationConfig}
            onChange={onTableChange}
        />
    )
};

export default UmTable;