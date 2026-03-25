
const FlickThrow = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-white">
      <button onClick={onBack} className="text-white/50 hover:text-white hover:scale-140 transition duration-300 cursor-pointer">
        ← Back
      </button>
    </div>
  )
}

export default FlickThrow