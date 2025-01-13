import { Star as StarIcon, HalfStar as HalfStarIcon } from "@/icons";

interface Props {
  calification: number;
}

export function Stars({ calification }: Props) {
  const fullStars = Math.floor(calification);
  const hasHalfStar = calification % 1 !== 0;

  return (
    <div className="flex">
      {Array.from({ length: fullStars }).map((_, index) => (
        <StarIcon key={`full-${index}`} className="size-3" />
      ))}
      {hasHalfStar && <HalfStarIcon className="size-3" />}
    </div>
  );
}
