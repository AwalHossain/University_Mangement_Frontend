'use client';

import ActionBar from "@/components/ui/ActionBar";
import UMbreadCrumb from "@/components/ui/UMbreadCrumb";
import { getUserInfo } from "@/service/auth.service";
import { Button } from "antd";
import Link from "next/link";

const MangeFacultyPage = () => {
    const { role } = getUserInfo() as any;
    return (
        <div>
            <UMbreadCrumb
                items={
                    [
                        {
                            label: `${role}`,
                            link: `/${role}`
                        }
                    ]
                }
            />

            <ActionBar title="Faculty List">
                <Link href={`/${role}/manage-faculty/create`}>
                    <Button type="primary">Add Faculty</Button>
                </Link>
            </ActionBar>
        </div>
    )
}

export default MangeFacultyPage