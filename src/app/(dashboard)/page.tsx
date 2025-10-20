"use client";

import { Text } from "@/components/ui/text";
import { apiHandler } from "@/lib/api/handler";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    async function hydrate() {
      const result = await apiHandler("/api/test");
      console.log(result);
    }
    hydrate();
  }, []);
  return (
    <div>
      <Text variant="h1">Dashboard</Text>
      <Text dimmed className="text-sm">
        An overview of all your activity on Big Lifts
      </Text>
    </div>
  );
}
