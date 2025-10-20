"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { IoMdArrowBack } from "react-icons/io";

export default function BackButton() {
  const { back } = useRouter();
  return (
    <Button variant="outline" onClick={back}>
      <IoMdArrowBack />
    </Button>
  );
}
