import { BackHome } from "../BackHome"

const BouncingLoader = () => {
  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <div className="relative z-50">
        <BackHome />
      </div>
    </div>
  )
}

export default BouncingLoader