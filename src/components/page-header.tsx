import { IoMdArrowBack } from "react-icons/io";
import BackButton from "./back-button";
import { Text } from "./ui/text";
import { Button } from "./ui/button";

interface IPageHeaderProps {
  onBack?: () => void;
  title: string;
  subtitle?: string;
}

export default function PageHeader({
  title,
  onBack,
  subtitle,
}: IPageHeaderProps) {
  return (
    <div className="flex items-start gap-3">
      {onBack ? (
        <Button onClick={onBack}>
          <IoMdArrowBack />
        </Button>
      ) : (
        <BackButton />
      )}
      <div>
        <Text variant="h1">{title}</Text>
        {subtitle && (
          <Text dimmed className="text-sm">
            {subtitle}
          </Text>
        )}
      </div>
    </div>
  );
}
