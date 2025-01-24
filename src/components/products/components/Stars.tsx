import { SIZES_STARS } from "@/constants"
import { Star as StarIcon, HalfStar as HalfStarIcon } from "@/icons"
import { SizesStarsType } from "@/models/stars.model"

interface Props {
  calification: number
  size: SizesStarsType
}

export function Stars({ calification, size }: Props) {
  const fullStars = Math.floor(calification)
  const hasHalfStar = calification % 1 !== 0
  const newSize = SIZES_STARS[size]
  return (
    <div className="flex">
      {Array.from({ length: fullStars }).map((_, index) => (
        <StarIcon key={`full-${index}`} className={newSize} />
      ))}
      {hasHalfStar && <HalfStarIcon className={newSize} />}
    </div>
  )
}
