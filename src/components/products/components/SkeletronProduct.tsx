interface Props {
  isMobile?: boolean
}

export const SkeletronProduct = ({ isMobile = false }: Props) => {
  const isShow = isMobile ? "hidden" : "grid"
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="animate-pulse">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3 mb-4"></div>
        <div className={`${isShow} grid-cols-1 md:grid-cols-2 gap-4`}>
          <div className="h-32 bg-gray-300 rounded"></div>
          <div className="h-32 bg-gray-300 rounded"></div>
          <div className="h-32 bg-gray-300 rounded"></div>
          <div className="h-32 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  )
}
