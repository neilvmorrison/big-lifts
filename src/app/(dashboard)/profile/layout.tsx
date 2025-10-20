import PageHeader from "@/components/page-header";
import { ReactNode } from "react";

interface IProfileLayoutProps {
  children: ReactNode;
}

export default async function ProfileLayout({ children }: IProfileLayoutProps) {
  return (
    <div className="flex flex-col gap-3">
      <PageHeader title="Profile" subtitle="An overview of your information" />
      {children}
    </div>
  );
}
