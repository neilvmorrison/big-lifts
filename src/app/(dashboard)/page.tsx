"use client";

import { Text } from "@/components/ui/text";
import { apiHandler } from "@/lib/api/handler";
import { useEffect, useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [data, setData] = useState<null | { message: string }>(null);

  useEffect(() => {
    async function hydrate() {
      setLoading(true);
      const result = await apiHandler<{ message: string }>("/api/test");
      if (!result.success) {
        setError(result.status.toString());
        setLoading(false);
        return;
      }
      setData(result.data);
      setLoading(false);
    }
    hydrate();
  }, []);

  return (
    <div>
      <Text variant="h1">Dashboard</Text>
      <Text dimmed className="text-sm">
        An overview of all your activity on Big Lifts
      </Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text className="text-red-500">{error}</Text>}
      {data && <Text className="text-green-500">{JSON.stringify(data)}</Text>}
    </div>
  );
}
